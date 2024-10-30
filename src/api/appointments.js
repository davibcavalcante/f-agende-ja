import { apiFetch } from "../axios/config";

export const postAppointments = async (formData) => {
    try {
        const results = await apiFetch.post('/appointment', formData);
        const data = await results.data;

        return { ok: true, message: data.message, id: data.id }
    } catch (err) {
        console.log(err);
        return false
    }
}