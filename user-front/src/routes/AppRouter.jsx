import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../modules/home/HomePage';
import MoviePage from '../modules/movies/MoviesPage';

const AppRouter = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/peliculas" element={<MoviePage />} />
            
            {/* Rutas de Dulcería y otros módulos que crearás */}
            <Route path="/productos" element={<div>Página de Productos</div>} />
            
            {/* Redirección */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </Router>
    );
};

export default AppRouter;