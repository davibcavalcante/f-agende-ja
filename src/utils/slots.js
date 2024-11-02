import { apiFetch } from "../axios/config";

export const getSlots = async () => {
    try {
        const results = await apiFetch.get('/availableslots');
        const data = await results.data;

        const slots = data.map(item => {
            const dateStr = item.data;

            const dateEn = new Date(dateStr);

            const datePt = new Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                weekday: 'long'
            }).format(dateEn).split('-').map(part => part.trim().charAt(0).toUpperCase() + part.slice(1)).join('-');

            const loc = `${item.unidade.nome}. ${item.unidade.endereco}`;

            return {
                id: item._id,
                date: datePt,
                time: item.horario,
                doctor: item.medico.nome,
                location: loc
            };
        });

        return slots;
    } catch (err) {
        console.log(err)
    }
}