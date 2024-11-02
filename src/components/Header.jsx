import { Link } from 'react-router-dom';
import { CalendarDays, Home, Menu, X } from 'lucide-react';
import { useContext } from 'react';

import MenuConetext from '../contexts/Menu';

import logoTexto from '../assets/logo-texto.png';
import logoIcon from '../assets/logo-icon.png'

const Header = () => {
    const { toggleMenu, isMenuOpen } = useContext(MenuConetext);

    return (
        <header className='relative flex items-center p-4 h-20'>
            <div className='flex items-center'>
                <img src={logoIcon} alt="Ícone da Clínica Agende Já" className='max-w-12' />
                <img src={logoTexto} alt="Logo de texto da Clínica Agende Já" className='max-w-32' />
            </div>
            <div className='flex-1 flex justify-end font-poppins'>
                {isMenuOpen ? <X className='lg:hidden' size={30} onClick={toggleMenu}/> : <Menu className='lg:hidden' size={30} onClick={toggleMenu}/>}
                <nav className={`flex flex-col bg-white absolute top-full ${isMenuOpen ? 'right-0' : '-right-full'} min-h-home w-10/12 z-50 p-8 duration-500 lg:static lg:bg-transparent lg:w-fit lg:min-h-0 lg:block lg:flex-1`}>
                    <ul className='flex-1 lg:flex lg:justify-center lg:items-center lg:gap-12'>
                        <li>
                            <Link to='/f-agende-ja' className='flex items-center gap-2 border-b-2 py-2 lg:border-0'>
                                <Home/> INÍCIO
                            </Link>
                        </li>
                        <li>
                            <Link to='/f-agende-ja/agendamento' className='flex items-center gap-2 border-b-2 py-2 lg:border-0'>
                                <CalendarDays/> AGENDAMENTO
                            </Link>
                        </li>
                    </ul>
                    <div className='lg:hidden flex justify-center border-t-2 pt-2'>
                        <img src={logoTexto} alt="Logo de texto da Clínica Agende Já" className='max-w-32' />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;