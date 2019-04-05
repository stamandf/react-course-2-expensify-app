import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (<p>No expenses</p>) : (
                
                <p>There are {props.expenses.length} bills:
            <ul>
                {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id}{...expense} />
                })}
            </ul>
            </p>
            ) 
        }
    
    </div>
);
// Version 1:
// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);
// export default ConnectedExpenseList;

// Version 2:
// export default = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

//Version 3 -- The Real World way, i.e. real world code bases:
// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     };
// };
const mapStateToProps = (state) => {
    return {
        expenses:  selectExpenses(state.expenses, state.filters), 
        filters: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseList);

