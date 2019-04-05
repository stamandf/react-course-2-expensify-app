// Expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {  //Action creator
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
