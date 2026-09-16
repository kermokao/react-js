import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import "./Expenses.css"

const Expenses = (props) => {
    const filteredExpenses = props.expenses.filter((expense) => {
        return props.selectedYear === 'all' || expense.date.getFullYear().toString() === props.selectedYear
    })

    return(
        <Card className="expenses">
            <ExpensesFilter selected={props.selectedYear} onChangeFilter={props.onFilterChange} />
            {filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.title} expenseData={expense}/>
            ))}
        </Card>
    )
}

export default Expenses