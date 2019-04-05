import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
editExpense = jest.fn();
removeExpense = jest.fn();
history = { push: jest.fn() };
wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]} />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense', () => {
    const mExpense = {
        id:'2',
        description:'Rent',
        note: 'This is a new note',
        amount:109500,
        createdAt: moment(0).subtract(4,'days').valueOf()
    }
    wrapper.find('ExpenseForm').prop('onSubmit')(mExpense);
    expect(editExpense).toBeCalledWith(expenses[1].id, mExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    
}); //spies

test('should handle removeExpense', () => {
    // wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    wrapper.find('button').simulate('click');
    expect(removeExpense).toBeCalledWith( {id: expenses[1].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
}); //spies