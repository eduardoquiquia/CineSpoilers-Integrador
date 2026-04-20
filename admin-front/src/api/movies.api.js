import { apiClient } from "./client";

export const getMovies = () => apiClient.get("/movies/");
export const getMovie = (id) => apiClient.get(`/movies/${id}/`);

export const createMovie = (data) => apiClient.post("/movies/", data);

export const updateMovie = (id, data) =>
    apiClient.put(`/movies/${id}/`, data);

export const deleteMovie = (id) =>
    apiClient.delete(`/movies/${id}/`);