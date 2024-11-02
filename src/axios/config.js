import axios from "axios";

export const apiFetch = axios.create({
    baseURL: 'https://indigitalenv.online',
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    }
});

apiFetch.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('auth_token'));
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);