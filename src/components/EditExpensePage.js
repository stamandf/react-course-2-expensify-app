import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
            <h1>Edit Expense</h1>
                 <ExpenseForm
                    expense={this.props.expense} 
                    onSubmit = {this.onSubmit}
                 />
                <button onClick={this.onClick}>Remove</button>

            </div>
        );
    };
}

// const startEditExpensePage = (props) => {
//     // console.log('Edit Expense props:',props.expense);
//     return (
//         <div>
//         <h1>Edit Expense</h1>
//              <ExpenseForm 
//                 expense={props.expense}
//                  onSubmit={(expense) => {
//                     props.dispatch(startEditExpense(props.expense.id, expense));
//                     props.history.push('/'); 
//                     // console.log('Expense updated:', expense)
//                  }}
//              />
//             <button onClick={() => {
//             props.dispatch(removeExpense({ id: props.expense.id }))  // store.dispatch(removeExpense({id: expenseOne.expense.id}));
//             props.history.push('/');
//             // console.log('Expense deleted:', props.expense.id) 
//         }} >Remove</button>
//         </div>
//     );
// };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
        };
     };

const mapDispatchToProps = (dispatch) => ({
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    });

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
