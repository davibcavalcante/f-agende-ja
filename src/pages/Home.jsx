import { Link, useNavigate } from 'react-router-dom';
import { getCards } from '../utils/cards';

import Header from "../components/Header";
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('auth_token'));
        if (!token) return navigate('/f-agende-ja/registro');
    }, [])

    const cards = getCards();

    return (
        <section>
            <Header />
            <section className="flex bg-home1 bg-cover min-h-home py-12 px-4 relative after:absolute after:w-full after:h-full after:bg-black after:left-0 after:top-0 after:bg-opacity-30 after:z-0 lg:px-8">
                <div className="flex flex-col w-full max-w-lg relative z-40 2xl:max-w-5xl">
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-darkM font-poppins font-semibold text-3xl lg:text-4xl 2xl:text-6xl">Atendimento <br /> <span className="text-lightM">acolhedor</span> e <span className="text-lightM">humanizado</span></h1>
                        <p className="text-white font-poppins text-lg 2xl:text-xl 2xl:max-w-xl">
                            Priorize o seu bem-estar e agende já uma consulta com umd de nossos profissionais
                        </p>
                    </div>
                    <div>
                        <Link to='/f-agende-ja/agendamento' className='bg-lightM text-white text-lg font-bold py-3 px-4 rounded-lg shadow-lg'>AGENDAR AGORA</Link>
                    </div>
                </div>
            </section>
            <section className='bg-opaque min-h-screen py-12 px-4 lg:p-12 lg:flex lg:flex-col'>
                <section className='flex flex-col gap-4 mb-8 max-w-6xl'>
                    <h1 className='text-darkM text-3xl font-poppins font-bold lg:text-5xl'>CLÍNICO GERAL</h1>
                    <p className='font-poppins 2xl:text-xl'>
                        O clínico geral é o médico habilitado para atender diferentes doenças e, principalmente, promover a saúde do organismo como um todo. Esse profissional possui um olhar completo do indivíduo e está apto a solucionar 70% das patologias, segundo a Sociedade Brasileira de Clínica Médica.
                    </p>
                </section>
                <section className='flex flex-col gap-8 lg:flex-row lg:overflow-x-auto lg:m-auto'>
                    {cards.map((card, index) => 
                        <div className='bg-white w-full rounded-lg max-w-96 m-auto lg:m-0 2xl:max-w-2xl' key={index}>
                            <div className='rounded-t-lg overflow-hidden'>
                                <img src={card.image} alt="Imagem de pacientes sendo atendido" />
                            </div>
                            <div className='p-2 flex flex-col gap-4'>
                                <h1 className='font-poppins text-2xl'>{card.title}</h1>
                                <p className='font-poppins'>{card.text}</p>
                            </div>
                        </div>
                    )}
                </section>
            </section>
            <Footer/>
        </section>
    );
}

export default Home;