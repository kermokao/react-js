import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if (props.expenses.length === 0) {
        return(
            <p className="expenses-list__fallback">No expenses found.</p>
        )
    }

    return(
        <ul className="expenses-list">
            {props.expenses.map((expense) => (
                <ExpenseItem expenseData={expense} key={expense.title}/>
            ))}
        </ul>
    )
}

export default ExpenseList;