import { MapPin } from "lucide-react";

const Slots = ({ date, loc, doctor, time, isActive, onClick }) => {

    return (
        <section className={`px-4 lg:hover:cursor-pointer min-w-full sm:min-w-[calc(50%)]`} onClick={onClick}>
            <p className="text-alert text-xl font-poppins">{date}</p>
            <section className={`min-w-full shadow-sm rounded-xl flex gap-4 p-4 ${isActive ? 'bg-active' : 'bg-opaque'} duration-300`}>
                <div className="text-lightM min-w-20 flex items-center justify-center">
                    <MapPin size={70}/>
                </div>
                <div className="font-poppins flex flex-col gap-4 w-full overflow-hidden">
                    <div className="flex-1">
                        <p className={`${isActive ? '' : 'line-clamp-2'}`}>{loc}</p>
                    </div>
                    <div className="flex">
                        <p className="text-wrap">Horário: <span className="text-alert">{time} </span>| {doctor}</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Slots;