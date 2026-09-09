import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Expenses.css"

const Expenses = (props) => {

    return(
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem key={expense.title} expenseData={expense}/>
            ))}
        </Card>
    )
}

export default Expenses