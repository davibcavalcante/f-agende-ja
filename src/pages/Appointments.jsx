import Header from "../components/Header";
import Slots from '../components/Slots';
import Footer from "../components/Footer";

import { postAppointments } from "../api/appointments";
import { getInputs } from "../utils/scheduling";
import { getSlots } from "../utils/slots";
import { useEffect, useState } from "react";

const Appointments = () => {
    const [slots, setSlots] = useState([]);
    const [activeSlotId, setActiveSlotId] = useState(null);

    const handleSlotClick = (id) => {
        setActiveSlotId((prevId) => (prevId === id ? null : id));
    };

    const callToGetSlots = async () => {
        const results = await getSlots();
        setSlots(results)
    }

    useEffect(() => {
        callToGetSlots()
    }, [])

    const sendData = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const data = form.birthdate.value;
        const cpf = form.cpf.value;
        const number = form.number.value;
        const mail = form.number.value;
        const rg = form.rg.value;

        if (name !== "" && data !== "" && cpf !== "" && number !== "" && mail !== "" && rg !== "") {
            const { id, message } = await postAppointments({
                usuario_id: JSON.parse(localStorage.getItem('user_id')),
                vaga_id: activeSlotId,
                paciente_nome: form.name.value,
                paciente_data: form.birthdate.value,
                paciente_cpf: form.cpf.value,
                paciente_tel: form.number.value,
                paciente_email: form.mail.value,
                paciente_rg: form.rg.value
            });

            console.log(message, id)
            // TODO: ATUALIZAR AS VAGAS APÓS AGENDAMENTO - MOSTRAR MENSAGEM DE SUCESSO | LIMPAR FORMULÁRIO |
        }
    }

    const inputs = getInputs();

    return (
        <section>
            <Header />
            <section className="min-h-home bg-scheduling bg-cover flex flex-col justify-center items-center py-8">
                <section className="bg-white rounded-xl shadow-xl w-full max-w-3xl 2xl:max-w-4xl">
                    <section className="py-8 px-4">
                        <div>
                            <h1 className="text-darkM font-poppins font-semibold text-3xl text-center">AGENDAMENTO DE <span className="text-lightM">CONSULTA</span></h1>
                        </div>
                    </section>
                    <section className="py-4 flex overflow-auto scrollbar-h-5 scrollbar-track-black scrollbar-thumb-black">
                        {slots.map((slot) => (
                            <Slots
                                key={slot.id}
                                date={slot.date}
                                loc={slot.location}
                                doctor={slot.doctor}
                                time={slot.time}
                                isActive={activeSlotId === slot.id}
                                onClick={() => handleSlotClick(slot.id)}
                            />
                        ))}
                    </section>
                    <section className="p-4">
                        <form autoComplete="off" onSubmit={sendData}>
                            <section className="2xl:flex 2xl:flex-wrap 2xl:justify-between">
                                {inputs.length > 0 &&
                                    inputs.map((item, index) =>
                                        <div className='flex flex-col gap-2 mb-6 2xl:w-[calc(50%-10px)]' key={index}>
                                            <label className='font-poppins text-lg block'>{item.label}</label>
                                            <input className='border-darkM border-2 px-4 py-2 rounded-lg' type={item.type} name={item.name} placeholder={item.placeholder} />
                                        </div>
                                    )
                                }
                            </section>
                            <button type="submit" className="bg-darkM text-white text-lg font-semibold px-8 py-2 rounded-lg">
                                CONFIRMAR
                            </button>
                        </form>
                    </section>
                </section>
            </section>
            <Footer />
        </section>
    );
}

export default Appointments;