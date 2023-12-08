import Header from "../../components/header.jsx";
import {useContext} from "react";
import {DataContext} from "../../App.jsx";

const Settings = () => {

    const {profile} = useContext(DataContext);

    console.log(profile);

    return (
        <>
            <Header/>
            <section className="w-full h-screen flex justify-center items-start pt-[200px] px-[100px]">
                <div className="flex flex-col py-[30px] px-[10px] w-full border-[2px] border-solid border-white min-h-[400px]">
                    <div className="flex justify-between text-white w-full">
                        <span className="w-[calc(100%/6)] text-center">Booking ID</span>
                        <span className="w-[calc(100%/6)] text-center">Persons</span>
                        <span className="w-[calc(100%/6)] text-center">Tables</span>
                        <span className="w-[calc(100%/6)] text-center">Note</span>
                        <span className="w-[calc(100%/6)] text-center">Date</span>
                        <span className="w-[calc(100%/6)] text-center">Time</span>
                    </div>
                    {profile.reservations.map((booking, index) => {
                        const {id, persons, tables, note, date, time} = booking;
                        return (
                            <div key={index} className="flex justify-between text-white w-full mt-[20px]">
                                <span className="w-[calc(100%/6)] text-center">{id}</span>
                                <span className="w-[calc(100%/6)] text-center">{persons}</span>
                                <span className="w-[calc(100%/6)] text-center">{tables}</span>
                                <span className="w-[calc(100%/6)] text-center">{note}</span>
                                <span className="w-[calc(100%/6)] text-center">{`${date.month}/${date.day}/${date.year}`}</span>
                                <span className="w-[calc(100%/6)] text-center">{time}</span>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default Settings;
