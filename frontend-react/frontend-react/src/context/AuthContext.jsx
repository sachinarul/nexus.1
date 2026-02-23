
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Authentication functions
    const login = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        // Update last login
        await setDoc(doc(db, "users", result.user.uid), {
            lastLogin: serverTimestamp()
        }, { merge: true });
        return result;
    };

    const signup = async (email, password, fullName) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, { displayName: fullName });

        // Create user document in Firestore
        await setDoc(doc(db, "users", result.user.uid), {
            uid: result.user.uid,
            name: fullName,
            email: email,
            role: 'user',
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(),
            provider: 'password'
        });
        return result;
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if user exists, if not create
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                role: 'user',
                createdAt: serverTimestamp(),
                lastLogin: serverTimestamp(),
                provider: 'google',
                photoURL: user.photoURL
            });
        } else {
            await setDoc(userRef, {
                lastLogin: serverTimestamp()
            }, { merge: true });
        }
        return result;
    };

    const logout = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Fetch additional user data from Firestore if needed
                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    setCurrentUser({ ...user, ...docSnap.data() });
                } else {
                    setCurrentUser(user);
                }
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        googleLogin
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
