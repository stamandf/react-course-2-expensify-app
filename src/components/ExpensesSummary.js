import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    if (expensesCount === 0) {
        return <p>No expenses.</p>
    } else {
        const expenseWord = expensesCount > 1 ? ("expenses") : ("expense");
        const totalFormatted = numeral(expensesTotal/100).format('$0,0.00'); 
        return (
            <p>
            Viewing {expensesCount} {expenseWord} totalling : {totalFormatted}.
        </p>
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
