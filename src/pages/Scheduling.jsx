import Header from "../components/Header";
import Vacancy from '../components/Vacancy';
import Footer from "../components/Footer";

import { getInputs } from "../utils/scheduling";
import { getVacancies } from "../utils/vacancies";

const Scheduling = () => {

    const vacancies = getVacancies();
    const inputs = getInputs();

    return (
        <section>
            <Header />
            <section className="min-h-home bg-scheduling bg-cover flex flex-col justify-center items-center py-8">
                <section className="bg-white rounded-xl shadow-xl w-full max-w-xl 2xl:max-w-4xl">
                    <section className="py-8 px-4">
                        <div>
                            <h1 className="text-darkM font-poppins font-semibold text-3xl text-center">AGENDAMENTO DE <span className="text-lightM">CONSULTA</span></h1>
                        </div>
                    </section>
                    <section className="py-4 flex overflow-auto scrollbar-h-5 scrollbar-track-black scrollbar-thumb-black">
                        {vacancies.map((vacancy) => 
                            <Vacancy date={vacancy.date} loc={vacancy.location} time={vacancy.time} />
                        )}
                    </section>
                    <section className="p-4">
                        <form autoComplete="off">
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

export default Scheduling;