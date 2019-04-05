import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './reducers/expenses';
import './reducers/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// addExpense -> Waterbill and Gas bill
store.dispatch(addExpense({description: 'Water bill', note: '', amount: 500, createdAt: 4500 }));
store.dispatch(addExpense({description: 'Gas bill', note: '', amount: 300, createdAt: 1250 }));
store.dispatch(addExpense({description: 'Rent', note: '', amount: 109500, createdAt: 2250 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
//     // store.dispatch(sortByDate());
    
// }, 3000);

const state = store.getState();

console.log(state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx =  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
// console.log(visibleExpenses);
ReactDOM.render(jsx, document.getElementById('app'));