import { apiClient } from "./client";

export const getMovies = () => apiClient.get("/movies");
export const getMovie = (id) => apiClient.get(`/movies/${id}`);
