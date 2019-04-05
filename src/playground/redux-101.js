import { createStore } from 'redux';

// Action generators: Functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy  //incrementBy: incrementBy same name therefore, can be replaced by just incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});
//Reducer
//The Reducer's attributes are :
//1. Reducers are pure functions. A pure function has the quality that is that an output is only determined by an input.
//2. Never change state or action

const countReducer = () => (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count: action.count 
        }
        case 'RESET':
        return {
            count: 0
        };
        
        default:
        return state;
    }
};
const store = createStore(countReducer);

//Actions = object that gets sent to the store
// console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

// unsubscribe();

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));
// store.dispatch({
//     type: 'SET',
//     count: 101
// });
