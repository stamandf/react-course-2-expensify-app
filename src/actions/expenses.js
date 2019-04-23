import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE Action
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {  //another way with destructuring to set the defaults
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    };
}
export const removeExpense = ({id} = {}) => ({
    type: 'DELETE_EXPENSE',
    id
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});



//1- Fetch all expense data once
//2- Parse that data into an array
//3- Dispatch SET_EXPENSES

// database.ref('expenses')
//         .once('value')
//         .then((snapshot) => {
//             // console.log(snapshot.val());
//             const expenses = [];

//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             console.log(expenses);
//         });


export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
                .once('value')
                .then((snapshot) => {
                    const expenses = [];
                    snapshot.forEach((childSnapshot) => {
                        expenses.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        });
                    });
                    dispatch(setExpenses(expenses));
                });
        };
};