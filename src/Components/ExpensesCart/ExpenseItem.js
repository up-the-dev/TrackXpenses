import { ExpenseDate } from "./ExpenseDate"
import { useContext } from "react"
import { ExpensesContext } from "../../ExpensesContext"

export const ExpenseItem = (props) => {
    const { expenses, setExpenses } = useContext(ExpensesContext)
    const Expense = props.Expense
    const deleteExpense = (e) => {
        /* format in localstorage
        const Expenses = {
        2002: [{
            title: 'subkhir',
            amount: '123',
            date: ''
            }],
        2003: [{
            title: '',
            amount: '',
            date: ''
            }]
        } */
        const _expenses = { ...expenses }
        const year = Expense.date.split('-')[0]
        _expenses[year].pop({ id: Expense.id })
        if (_expenses[year].length === 0) {
            delete _expenses[year]
        }
        setExpenses(_expenses)

    }

    return (
        <div className=" border-black p-3 border-2 rounded-xl flex justify-between bg-gray-500" >
            <div className="flex items-center gap-10">
                {<ExpenseDate date={Expense.date} />}
                <h1 className="font-extrabold text-white text-lg">{Expense.title}</h1>
            </div>
            <div className="flex items-center">
                <button className="bg-rose-900 px-4 text-white font-semibold border rounded-xl p-1 text-sm">₹ {Expense.amount}</button>
                <button onClick={deleteExpense} className="bg-gray-800 px-3 py-1 text-white font-semibold border rounded-xl mx-1 text-xs">
                    <img src="delete.png" alt="deleteBtn" className="w-3 inline mb-1" /> Delete
                </button>
            </div>
        </div>


    )
}
