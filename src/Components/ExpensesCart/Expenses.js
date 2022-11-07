import { ExpenseItem } from "./ExpenseItem"

export const Expenses = () => {
    const Expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },

    ];
    return (
        <div className=" container mx-auto w-1/2 p-5  border-white border rounded-3xl bg-gray-800 flex flex-col justify-around gap-5">
            {Expenses.map(Expense => <ExpenseItem key={Expense.id} Expense={Expense} />)}
        </div>
    )
}