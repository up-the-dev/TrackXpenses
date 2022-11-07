export const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="py-1 px-3 border rounded-lg flex flex-col items-center text-white bg-gray-800">
            <h1 className="text-sm  font-extrabold">{month}</h1>
            <h1 className="text-xs">{year}</h1>
            <h1 className="text-xl font-extrabold">{day}</h1>
        </div>
    )
}
