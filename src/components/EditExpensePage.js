import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {
    state = {
        selectedRemove: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    
    onClick = () => {
        this.setState({
            selectedRemove: true
        });
        // this.props.startRemoveExpense({ id: this.props.expense.id });
        // this.props.history.push('/');
    }

    handleRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    onPrintState = () => {
        console.log('this.selectedRemove3=',this.state.selectedRemove);
    }

    handleCloseModal = () => {
        this.setState({
            selectedRemove: false
        });
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense} 
                        onSubmit = {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onClick}>Remove Expense</button>
                    <RemoveModal 
                        selectedRemove={this.state.selectedRemove}
                        handleCloseModal= {this.handleCloseModal}
                        handleRemoveExpense = {this.handleRemoveExpense}
                    />
                </div>
            </div>
        );
    };
}


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
