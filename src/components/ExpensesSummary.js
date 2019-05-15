import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    if (expensesCount === 0) {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">No expenses.</h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>    
                </div>
            </div>
            )
    } else {
        const expenseWord = expensesCount > 1 ? ("expenses") : ("expense");
        const totalFormatted = numeral(expensesTotal/100).format('$0,0.00'); 
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling : <span>{totalFormatted}</span>.</h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length, 
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);

//Previous version:
//================================================

// export const ExpensesSummary = (props) => {
//     console.log("props:", props);
    
//     if (props.expenses.length === 0) {
//         return <p>No expenses.</p>
//     } else {
//         const expenseWord = props.expenses.length > 1 ? ("expenses") : ("expense");
//         const amount = selectExpensesTotal(props.expenses); 
//         return (
//             <p>
//             Viewing {props.expenses.length} {expenseWord} totalling : {numeral(amount/100).format('$0,0.00')}
//         </p>
//         )
        
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         expenses:  selectExpenses(state.expenses, state.filters), 
//         filters: state.filters
//     };
// };
