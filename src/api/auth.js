import { apiFetch } from "../axios/config";

export const postLogin = async (formData, setLoading) => {
    try {
        setLoading(true);
        const results = await apiFetch.post('/login', formData);

        const token = await results.data.token;
        const userId = await results.data.user_id

        localStorage.setItem('auth_token', JSON.stringify(token));
        localStorage.setItem('user_id', JSON.stringify(userId));

        setLoading(false);
        return true
    } catch (err) {
        console.log(err);
        setLoading(false);
        return false
    }
}

export const postRegister = async (formData, setLoading) => {
    try {
        setLoading(true);
        const results = await apiFetch.post('/register', formData);

        const token = await results.data.token;
        const userId = await results.data.id

        localStorage.setItem('auth_token', JSON.stringify(token));
        localStorage.setItem('user_id', JSON.stringify(userId));

        setLoading(false);
       return true
    } catch (err) {
        console.log('Não foi possível registrar o usuário', err);
        setLoading(false);
        return false
    }
};