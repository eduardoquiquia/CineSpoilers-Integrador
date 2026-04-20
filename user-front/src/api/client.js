import axios from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? import.meta.env.VITE_BACKEND_URL
        : "http://localhost:8080";

export const apiClient = axios.create({
    baseURL: `${URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor (opcional, futuro token)
apiClient.interceptors.request.use((config) => {
    return config;
});