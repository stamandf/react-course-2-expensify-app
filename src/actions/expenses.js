import uuid from 'uuid';

// ADD_EXPENSE Action
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

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
