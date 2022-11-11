import { useContext } from "react";
import { ExpensesContext } from "../../ExpensesContext";

export const ExpensesFilter = () => {
    const { setFilteredYear } = useContext(ExpensesContext)
    const filterExpenseByYear = (e) => {
        const year = e.target.value
        if (year === 'filter by year') {
            setFilteredYear('')
            return
        }
        setFilteredYear(`${year}`)
    }

    return (
        <div className='p-3 underline decoration-1 decoration-white  decoration-solid'>
            <div className='flex justify-between'>
                <label className="text-white font-semibold">Filter by year</label>
                <select onChange={filterExpenseByYear} className="py-1 px-5 rounded-xl font-medium border-2 border-rose-900">
                    <option>filter by year</option>
                    <option value='2022' >2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};