import { MapPin } from "lucide-react";

const Vacancy = ({date, loc, time}) => {
    return (
        <section className="px-4 min-w-fit lg:hover:cursor-pointer">
            <p className="text-alert text-xl font-poppins">{date}</p>
            <section className="bg-opaque w-fit shadow-sm rounded-xl flex gap-4 p-4">
                <div className="text-lightM min-w-20 flex items-center justify-center">
                    <MapPin size={50}/>
                </div>
                <div className="font-poppins flex flex-col gap-4">
                    <div className="flex-1" dangerouslySetInnerHTML={{ __html: loc }} />
                    <div className="flex justify-end">
                        <p>Horário: <span className="text-alert">{time}</span></p>
                    </div>
                </div>
            </section>
        </section>
    );
} 

export default Vacancy;