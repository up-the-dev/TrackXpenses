import { ExpenceDate } from "./ExpenceDate"

export const ExpenceItem = (props) => {
    const expence = props.expence

    return (
        <div className=" border-black p-3 border-2 rounded-xl flex justify-between bg-gray-500" >
            <div className="flex items-center gap-10">
                {<ExpenceDate date={expence.date} />}
                <h1 className="font-extrabold text-white text-lg">{expence.title}</h1>
            </div>
            <div className="flex items-center">
                <button className="bg-rose-900 px-4 py-1 text-white font-semibold border rounded-lg">₹ {expence.amount}</button>
            </div>
        </div>


    )
}
