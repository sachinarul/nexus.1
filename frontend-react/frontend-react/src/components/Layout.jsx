
const Layout = ({ children }) => {
    return (
        <div className="bg-[#FFFFFF] min-h-screen text-[#111111] font-body selection:bg-teal-50 selection:text-[#111111]">
            {children}
        </div>
    );
};

export default Layout;
