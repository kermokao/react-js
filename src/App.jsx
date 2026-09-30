import "./App.css";
import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const [selectedYear, setSelectedYear] = useState('all')

    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem("expenses");

        if (!storedExpenses) {
            return [];
        }

        try {
            const parsedExpenses = JSON.parse(storedExpenses);
            if (!Array.isArray(parsedExpenses)) {
                return [];
            }

            return parsedExpenses.map((expense) => ({
                ...expense,
                date: new Date(expense.date)
            }));
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const addExpenseHandler = (expense) => {
        setExpenses((previousExpenses) => [expense, ...previousExpenses])
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses
                expenses={expenses}
                selectedYear={selectedYear}
                onFilterChange={setSelectedYear}
            />
        </div>
    );
}

export default App;
