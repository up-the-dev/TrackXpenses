import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { ExpensesContext } from './ExpensesContext';

function App() {
  const [expenses, setExpenses] = useState({})
  useEffect(() => {
    const expenses = window.localStorage.getItem('Expenses')
    setExpenses(JSON.parse(expenses))
  }, [])
  useEffect(() => {
    console.log(expenses)
    window.localStorage.setItem('Expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      <Home />
    </ExpensesContext.Provider>
  )
}

export default App;
