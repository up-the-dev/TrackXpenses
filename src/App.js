import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { ExpensesContext } from './ExpensesContext';

function App() {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem('expenses')) || {}
  })
  const [filteredYear, setFilteredYear] = useState('')
  useEffect(() => {
    window.localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses, filteredYear, setFilteredYear }}>
      <Home />
    </ExpensesContext.Provider >
  )
}

export default App;
