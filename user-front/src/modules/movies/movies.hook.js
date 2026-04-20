import { useState, useEffect } from "react";
import { getMovies } from "../../api/movies.api";
import { moviesConfig } from "./movies.config";

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        try {
            const response = await getMovies(); 
            
            const result = response.data; 
            const movieList = Array.isArray(result) ? result : result.content || [];
            setMovies(movieList);
        } catch (err) {
            console.error(err);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return { 
        movies, 
        loading, 
        config: moviesConfig
    };
};