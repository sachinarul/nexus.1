from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Depends
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import sqlite3
import os

app = FastAPI()

# Database Setup
DB_NAME = "noble_nexus.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)''')
    c.execute('''CREATE TABLE IF NOT EXISTS feedback
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)''')
    conn.commit()
    conn.close()

init_db()

# Pydantic Models
class UserCreate(BaseModel):
    name: Optional[str] = None
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class FeedbackCreate(BaseModel):
    message: str

# API Routes
@app.post("/api/signup")
async def signup(user: UserCreate):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    try:
        c.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
                  (user.name, user.email, user.password)) # In production, hash passwords!
        conn.commit()
        return {"message": "User created successfully"}
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Email already registered")
    finally:
        conn.close()

@app.post("/api/login")
async def login(user: UserLogin):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE email=? AND password=?", (user.email, user.password))
    user_data = c.fetchone()
    conn.close()
    
    if user_data:
        return {"message": "Login successful", "user": {"name": user_data[1], "email": user_data[2]}}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/api/feedback")
async def submit_feedback(feedback: FeedbackCreate):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("INSERT INTO feedback (message) VALUES (?)", (feedback.message,))
    conn.commit()
    conn.close()
    return {"message": "Feedback received"}

# Serve Frontend Static Files
# Mount assets and src directories
app.mount("/assets", StaticFiles(directory="../frontend/assets"), name="assets")
app.mount("/src", StaticFiles(directory="../frontend/src"), name="src")
app.mount("/services", StaticFiles(directory="../frontend/services"), name="services")

# Serve HTML pages dynamically or statically
@app.get("/")
async def read_index():
    return FileResponse("../frontend/index.html")

@app.get("/{filename}")
async def read_html(filename: str):
    file_path = f"../frontend/{filename}"
    if os.path.exists(file_path):
        return FileResponse(file_path)
    # Check if inside services, but client asks for '/services/...' usually, which is covered by mount if html=True
    # However, if client asks for 'elms.html' directly, this handles it.
    raise HTTPException(status_code=404, detail="File not found")
