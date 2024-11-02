import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';

import { getInputs } from '../../utils/authenticate';
import { postLogin, postRegister } from '../../api/auth';

import logoIcon from '../../assets/logo-icon.png'

const FormAuthenticate = ({ action }) => {
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    const sendData = async (e) => {
        e.preventDefault();
        const form = e.target;

        const cpf = form.cpf.value.replace(/[.-]/g, '');

        if (action === 'Login') {
            const isLoggedIn = await postLogin({ cpf, senha: form.password.value }, setLoading);
            if (isLoggedIn) return navigate('/f-agende-ja')
        }

        if (action === 'Register') {
            const isRegistered = await postRegister({ nome: form.name.value, senha: form.password.value, mae: form.mother.value, nascimento: form.birthdate.value, cpf });
            if (isRegistered) return navigate('/f-agende-ja')
        }
    }

    const inputs = getInputs(action);

    return (
        <section className={`bg-white w-screen min-h-screen lg:min-h-0 lg:max-w-xl py-8 px-4 rounded-xl shadow-lg xl:rounded-tl-none xl:rounded-bl-none`}>
            <div className='flex flex-col items-center gap-4'>
                <div className='max-w-20'>
                    <img src={logoIcon} alt="Logo da Clínica Agende Já" />
                </div>
                <div>
                    <h1 className='text-darkM text-3xl font-poppins font-semibold'><span className='text-lightM'>BEM-</span>VINDO</h1>
                </div>
            </div>
            <div>
                <form autoComplete='off' onSubmit={sendData}>
                    {inputs.length > 0 &&
                        inputs.map((item, index) =>
                            <div className='flex flex-col gap-2 mb-6' key={index}>
                                <label className='font-poppins text-lg block'>{item.label}</label>
                                <input className='border-darkM border-2 px-4 py-2 rounded-lg' type={item.type} name={item.name} placeholder={item.placeholder} />
                            </div>
                        )
                    }

                    <button className='text-white bg-darkM font-poppins font-semibold px-8 py-2 rounded-lg w-3/4 m-auto block shadow-xl' type='submit'>
                        {loading ?
                            <ThreeDot color={"#FFF"} size='small' />
                            :
                            action === 'Login' ? 'LOGAR' : 'REGISTRAR'
                        }
                    </button>
                    <div>
                        {action === 'Login' ?
                            <p className='text-center font-poppins font-medium mt-4'>Ainda não tem uma conta? <Link to='/f-agende-ja/registro' className='text-lightM'>Cadastre-se.</Link></p>
                            :
                            <p className='text-center font-poppins font-medium mt-4'>Já tem uma conta? <Link to='/f-agende-ja/login' className='text-lightM'>Faça login.</Link></p>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormAuthenticate;