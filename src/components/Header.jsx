import { Link } from 'react-router-dom';

import logoTexto from '../assets/logo-texto.png';
import logoIcon from '../assets/logo-icon.png'
import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <header className='flex items-center p-4 h-20'>
            <div className='flex items-center'>
                <img src={logoIcon} alt="Ícone da Clínica Agende Já" className='max-w-12' />
                <img src={logoTexto} alt="Logo de texto da Clínica Agende Já" className='max-w-32' />
            </div>
            <div className='flex-1 flex justify-end font-poppins'>
                <Menu className='lg:hidden' size={30}/>
                <nav className='hidden lg:block lg:flex-1'>
                    <ul className='lg:flex lg:justify-center lg:gap-16'>
                        <li><Link to='/'>INÍCIO</Link></li>
                        <li><Link to='/sobrenos'>SOBRE NÓS</Link></li>
                        <li><Link to='/agendamento'>AGENDAMENTO</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;