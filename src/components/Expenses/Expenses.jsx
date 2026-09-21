import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpenseList from "./Expense.List"
import "./Expenses.css"

const Expenses = (props) => {
    const filteredExpenses = props.expenses.filter((expense) => {
        return props.selectedYear === 'all' || expense.date.getFullYear().toString() === props.selectedYear
    })

    return(
        <Card className="expenses">
            <ExpensesFilter selected={props.selectedYear} onChangeFilter={props.onFilterChange} />
            <ExpenseList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses