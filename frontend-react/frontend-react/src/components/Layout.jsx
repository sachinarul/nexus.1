
const Layout = ({ children }) => {
    return (
        <div className="bg-navy min-h-screen text-white font-body selection:bg-teal selection:text-navy">
            {children}
        </div>
    );
};

export default Layout;
