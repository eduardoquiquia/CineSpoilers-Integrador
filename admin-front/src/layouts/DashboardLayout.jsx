import { NavLink, Outlet } from "react-router-dom";

const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Usuarios", path: "/users" },
    { name: "Películas", path: "/movies" },
    { name: "Productos", path: "/products" },
];

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-bgMain text-textMain">

        {/* NAVBAR FLOTANTE */}
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex gap-2 bg-bgSoft rounded-xl px-4 py-2">

            {navItems.map((item) => (
                <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"} // importante para dashboard
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 
                    ${
                    isActive
                        ? "bg-primary text-white"
                        : "text-textSoft hover:text-white hover:bg-bgHover"
                    }`
                }
                >
                {item.name}
                </NavLink>
            ))}

            </div>
        </div>

        {/* CONTENIDO */}
        <div className="pt-24 px-6">
            <Outlet />
        </div>

        </div>
    );
};

export default DashboardLayout;