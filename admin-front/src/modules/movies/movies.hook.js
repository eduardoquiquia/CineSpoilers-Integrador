import { useEffect, useState } from "react";
import {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie,
} from "../../api/movies.api";

export const useMovies = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await getMovies();
        setData(res.data); // Axios → data
    };

    useEffect(() => {
        fetchData();
    }, []);

    const save = async (form, selected) => {
        if (selected) {
        await updateMovie(selected.id, form);
        } else {
        await createMovie(form);
        }
        fetchData();
    };

    const remove = async (id) => {
        await deleteMovie(id);
        fetchData();
    };

    return {
        data,
        save,
        remove,
    };
};