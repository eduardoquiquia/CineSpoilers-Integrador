import { useMovies } from "./movies.hook";
import { MainLayout } from "../../layouts/MainLayout";
import { MovieCard } from "../../components/MovieCard";

const MoviePage = () => {
    const { movies, loading, error } = useMovies();

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#000814]">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-[#000814] border-t-[#00aae4] rounded-full animate-spin" />
            <span className="text-white/30 text-xs tracking-[3px] uppercase font-bold"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Cargando...
            </span>
        </div>
        </div>
    );

    return (
        <MainLayout>
        <div className="max-w-7xl mx-auto py-16 px-4">
            <div className="flex items-center gap-5 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-[#00aae4] to-transparent flex-shrink-0" />
            <div>
                <h2
                className="text-[2.2rem] font-black italic uppercase leading-none text-white"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '-0.5px' }}
                >
                Cartelera Completa
                </h2>
                <p className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#00aae4] mt-1"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Todas las películas disponibles
                </p>
            </div>
            </div>

            {error && (
            <p className="text-red-400 text-center font-bold bg-red-500/10 border border-red-500/20 p-4 rounded-[4px] mb-8">
                {error}
            </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        </div>
        </MainLayout>
    );
};

export default MoviePage;