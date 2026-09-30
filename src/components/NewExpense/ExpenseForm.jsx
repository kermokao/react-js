import { Fragment, useRef, useState } from "react";
import Error from "../UI/Error";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const titleRef = useRef();
    const priceRef = useRef();
    const dateRef = useRef();
    const [error, setError] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredTitle = titleRef.current.value.trim();
        const enteredPrice = priceRef.current.value;
        const enteredDate = dateRef.current.value;

        if (!enteredTitle || !enteredPrice || Number(enteredPrice) <= 0 || !enteredDate) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid title, amount, and date."
            });
            return;
        }

        const expenseData = {
            title: enteredTitle,
            price: Number(enteredPrice),
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        titleRef.current.value = "";
        priceRef.current.value = "";
        dateRef.current.value = "";
    }

    const cancelHandler = () => {
        titleRef.current.value = "";
        priceRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <Fragment>
            {error && <Error title={error.title} message={error.message} onConfirm={() => setError(null)} />}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" ref={titleRef} />
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input type="number" min="0.01" step="0.01" ref={priceRef} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2024-11-12" max="2026-01-31" ref={dateRef} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" className="alternative" onClick={cancelHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </Fragment>
    )

}

export default ExpenseForm