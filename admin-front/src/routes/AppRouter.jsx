import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../modules/dashboard/DashboardPage";
import UsersPage from "../modules/users/UsersPage";
import MoviesPage from "../modules/movies/MoviesPage";
import ProductsPage from "../modules/products/ProductsPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
                {/* Rutas dinámicas */}
                <Route path="users" element={<UsersPage />} />
                <Route path="movies" element={<MoviesPage />} />
                <Route path="products" element={<ProductsPage />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;