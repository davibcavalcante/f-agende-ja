import axios from "axios";

export const apiFetch = axios.create({
    baseURL: 'http://127.0.0.1:5000',
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