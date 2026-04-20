import { MainLayout } from "../../layouts/MainLayout";
import { useMovies } from "../movies/movies.hook";
import { MovieCarousel } from "../../components/MovieCarousel";
import { MovieCard } from "../../components/MovieCard";

const HomePage = () => {
    const { movies, loading } = useMovies();

    return (
        <MainLayout>
        {!loading && <MovieCarousel items={Array.isArray(movies) ? movies.slice(0, 5) : []} />}

        <div className="py-16 bg-[#050d1a]">
            <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-5">
                <div className="w-1 h-12 bg-gradient-to-b from-[#00aae4] to-transparent flex-shrink-0" />
                <div>
                    <h2
                    className="text-[2.2rem] font-black italic uppercase leading-none text-white"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '-0.5px' }}
                    >
                    En Cartelera
                    </h2>
                    <p className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#00aae4] mt-1"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    Esta semana en cines
                    </p>
                </div>
                </div>
            </div>

            {Array.isArray(movies) && movies.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                </div>
            ) : (
                !loading && (
                <p className="text-center text-white/30 font-light py-20">
                    No hay películas disponibles en este momento.
                </p>
                )
            )}
            </div>
        </div>
        </MainLayout>
    );
};

export default HomePage;