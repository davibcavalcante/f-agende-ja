import { Mail, Phone } from 'lucide-react';
import logoTexto from '../assets/logo-texto.png';

import FormAuthenticate from "../components/Authenticate/FormAuthenticate";

const Authenticate = ({ action }) => {
    return (
        <section className="bg-authenticate bg-cover bg-fixed w-screen min-h-screen lg:flex lg:justify-center lg:p-8">
            <section className="bg-darkM hidden xl:flex xl:flex-col xl:p-8 xl:rounded-tl-xl xl:rounded-bl-xl">
                <div className="flex flex-col max-w-2xl gap-4 flex-1">
                    <h1 className="text-white text-4xl font-poppisn font-bold">Texto sobre a Clínica</h1>
                    <p className="text-white text-lg font-poppins font-light border-b-2 pb-4">
                        Para uma mente e um corpo saudável, apresentamos a você a mais nova clínica de especialidades médicas com profissionais qualificados e a preço popular: Clínico geral, dermatologia, fisioterapia, fonoaudiologia, cardiologia, neuripsicologia, nutrição, psicologia, ortopedia entre outros.
                        Estamos esperando sua visita. Agende consulta agora mesmo!
                    </p>
                    <p className='text-white text-lg font-poppins font-light border-b-2 pb-4'>
                        Para uma mente e um corpo saudável, apresentamos a você a mais nova clínica de especialidades médicas com profissionais qualificados e a preço popular: Clínico geral, dermatologia, fisioterapia, fonoaudiologia, cardiologia, neuripsicologia, nutrição, psicologia, ortopedia entre outros.
                        Estamos esperando sua visita. Agende consulta agora mesmo!
                    </p>
                    <div className='flex gap-4 justify-center'>
                        <p className='bg-white text-darkM font-poppins p-2 flex items-center gap-4 rounded-lg shadow-lg'>
                            <Phone className='text-darkM'/> (62) 9 9999-9999
                        </p>
                        <p className='bg-white text-darkM font-poppins p-2 flex items-center gap-4 rounded-lg shadow-lg'>
                            <Mail/> agendeja@gmail.ccom
                        </p>
                    </div>
                </div>
                <div className='max-w-40 m-auto bg-white px-8 py-4 rounded-xl'>
                    <img src={logoTexto} alt="Logo de Texto Agende Já" />
                </div>
            </section>
            <FormAuthenticate action={action} />
        </section>
    );
}

export default Authenticate;