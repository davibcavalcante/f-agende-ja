import { Mail, Phone } from 'lucide-react';
import logoTexto from '../assets/logo-texto.png';

import FormAuthenticate from "../components/Authenticate/FormAuthenticate";

const Authenticate = ({ action }) => {
    return (
        <section className="bg-authenticate bg-cover bg-fixed w-screen min-h-screen lg:flex lg:justify-center lg:p-8">
            <section className="bg-darkM hidden xl:flex xl:flex-col xl:p-8 xl:rounded-tl-xl xl:rounded-bl-xl xl:gap-8">
                <div className="flex flex-col max-w-2xl gap-4 flex-1">
                    <h1 className="text-white text-4xl font-poppisn font-bold">Agende Já</h1>
                    <p className="text-white text-lg font-poppins font-light border-b-2 pb-4">
                        A Agende Já é uma clínica pensada especialmente para oferecer apoio e atendimento inicial a pessoas em situação de vulnerabilidade, que muitas vezes enfrentam dificuldades para acessar o sistema de saúde. Nosso objetivo é facilitar a marcação de consultas com um clínico geral, proporcionando um primeiro contato com profissionais qualificados que podem avaliar e orientar os pacientes para o tratamento adequado.
                    </p>
                    <p className='text-white text-lg font-poppins font-light border-b-2 pb-4'>
                        Na Agende Já, priorizamos a acolhida e o respeito, garantindo que cada pessoa tenha a atenção necessária para iniciar o cuidado com sua saúde. A clínica oferece agendamentos simplificados, sem burocracias, permitindo que nossos pacientes consigam acesso a uma avaliação médica básica de maneira rápida e humanizada. Além disso, contamos com horários flexíveis e profissionais comprometidos em prestar um atendimento que respeita a individualidade e as necessidades de cada um.
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