import { NewExpense } from "../Components/AddExpense/NewExpense"
import { Expenses } from "../Components/ExpensesCart/Expenses"

export const Home = () => {
    return (
        <div className="bg-gray-500 flex flex-col gap-6 items-center justify-center p-10 min-h-screen">
            <NewExpense />
            <Expenses />
        </div>
    )
}
