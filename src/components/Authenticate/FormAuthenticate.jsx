import { useState, useEffect } from 'react';
import { getInputs } from '../../utils/authenticate';

import logoIcon from '../../assets/logo-icon.png'

const FormAuthenticate = ({ action }) => {
    const sendData = () => {

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

                    <button className='text-white bg-darkM font-poppins font-semibold px-8 py-2 rounded-lg' type='submit'>
                        {action === 'Login' ? 'LOGAR' : 'REGISTRAR'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default FormAuthenticate;