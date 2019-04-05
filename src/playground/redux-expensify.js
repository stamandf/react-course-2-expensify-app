import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE Action
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'DELETE_EXPENSE',
    id
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {  //Action creator
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [...state, action.expense]; //The spreading operator for arrays
        case 'DELETE_EXPENSE':
            return state.filter(({id}) => id != action.id);  
        case 'EDIT_EXPENSE':   
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};
const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
         case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }     
         case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }     
        default:
            return state;
    }
};

// timestamps (milliseconds)
// January 1st 1970 (unix epoch)
// Get Visible expenses
const getVisibleExpenses = (expenses,{ text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // const startDateMatch = typeof startDate === undefined || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate === undefined || expense.createdAt <= endDate;

        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } 
    });
};
// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description:'March Rent', amount:1000, createdAt:-21000 }));
const expenseTwo = store.dispatch(addExpense({ description:'Hair products', amount:500, createdAt: -1000 }));

// console.log('Expense One: ', expenseOne);
// console.log('Expense One id: ', expenseOne.expense.id);


// store.dispatch(addExpense({description:'April Rent', note: 'This is final payment before spring', amount: 100000}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount:500 }));

// console.log('Text Filtering:');
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
console.log('Sort by date:');
store.dispatch(sortByDate());

console.log('Sort by Amount:');
store.dispatch(sortByAmount());


// console.log('Set start and end dates:');

// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-500));
// console.log('Text Filtering:');
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('Hair'));
// store.dispatch(setTextFilter('PRO'));

const demoState = {
    expenses: [{
        id: 'poeriutpoeriut',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
console.log('Redux-Expensify!');






