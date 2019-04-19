import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import moment from 'moment';

const createMockStore = configureMockStore([thunk]);
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'DELETE_EXPENSE',
        id: '123abc'
    })
;});

test('should setup edit expense action object', () => {
   const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    // const expenseData = {
    //     description: 'Hydro bill',
    //     note:'',
    //     amount: '75',
    //     createdAt: 1553013080809
    // }
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});

    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    //check if action is correctly dispatched
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });  
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});

    const expenseDefaultData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    };

    //check if action is correctly dispatched
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaultData
            }
        });  
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaultData);
        done();
    });
});





// test('should setup add expense action object with default values', () => {
//     const expenseDefaultData = {
//         description: '',
//         note:'',
//         amount: 0,
//         createdAt: 0
//     }
//     const action = startAddExpense({});
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseDefaultData,
//             id: expect.any(String)
//         }
//     });
// });