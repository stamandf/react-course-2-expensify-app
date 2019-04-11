import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should display multiple expenses summary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();

    // const output = selectExpensesTotal(expenses);
    // expect(output).toBe("Viewing 3 expenses totalling : $1,141.95"); //1,141.95
})

test('should display one expense summary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();

});

test('should display expense summary correctly when no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();

});
