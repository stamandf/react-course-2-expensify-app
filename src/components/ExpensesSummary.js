import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = ({ expensesCount, expensesTotal, expensesHidden }) => {
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
                    {!!expensesHidden && <p>There are {expensesHidden} expenses hidden. </p>}
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
    const invisibleExpenses = selectExpenses(state.expenses, state.filters);
    const hiddenCount = state.expenses.length - invisibleExpenses.length;
    return {
        expensesCount: visibleExpenses.length, 
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesHidden: hiddenCount
    };
};
export default connect(mapStateToProps)(ExpensesSummary);

