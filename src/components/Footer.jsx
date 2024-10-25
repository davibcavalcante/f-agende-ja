import { getInformations } from '../utils/footer';

import logoIcon from '../assets/logo-icon.png'

const Footer = () => {

    const info = getInformations();

    return (
        <footer className='bg-darkM flex flex-col justify-center items-center gap-8 py-8 px-4 lg:justify-normal'>
            <div className='bg-white w-16 h-16 p-2 rounded-full flex items-center justify-center'>
                <img src={logoIcon} alt="Ícone da Clínica Agende Já" className='max-w-full' />
            </div>
            <section className='text-white flex flex-col items-center gap-4 lg:min-w-full lg:flex-row lg:justify-around lg:items-start'>
                {info.map((inf, index) =>
                    <div key={index}>
                        <h1 className='font-poppins text-xl text-center font-semibold lg:text-left 2xl:text-3xl 2xl:font-medium'>{inf.title}</h1>
                        {inf.texts.map((text, index) => 
                            <p key={index} className='font-poppins text-center lg:text-left'>{text}</p>
                        )}
                    </div>
                )}
            </section>
            <section className='text-white font-poppins flex flex-col gap-2'>
                <p className='text-sm text-center'>"A boa medicina é igual em qualquer lugar, mas o médico deve ser diferente para cada paciente."</p>
                <p className='text-opaque text-sm text-center'>Sir William Osler</p>
            </section>
        </footer>
    );
}

export default Footer;