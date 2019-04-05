import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';


test('should render an expense item correctly', () => {
  const wrapper = shallow(<ExpenseListItem item={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});