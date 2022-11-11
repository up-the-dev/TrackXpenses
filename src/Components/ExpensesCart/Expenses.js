import { useContext } from "react";
import { ExpensesContext } from "../../ExpensesContext";
import { ExpensesFilter } from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem"

export const Expenses = () => {
    const { expenses, filteredYear } = useContext(ExpensesContext)
    const filterExpense = Object.entries(expenses).filter((Exp) => {
        if (filteredYear === '') {
            return true
        }
        return Exp[0].toString() === filteredYear
    })
    return (
        <div className=" container mx-auto w-1/2 p-5  border-white border rounded-3xl bg-gray-800 flex flex-col justify-around gap-5">
            {/* {Expenses.map(Expense => <ExpenseItem key={Expense.id} Expense={Expense} />)} */}
            <ExpensesFilter />
            {filterExpense.map((Exp) => {
                return Exp[1].map((e) => {
                    return < ExpenseItem key={e.id} Expense={e} />;
                })
            })}
        </div>
    )
}