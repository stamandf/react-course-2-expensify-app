import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    
    }
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'This is my new text.'
    }
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({
        text:'This is my new text.',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined

    })
});

test('should set start date filter', () => {
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    
    }
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({
        text:'',
        sortBy: 'amount',
        startDate: moment(0),
        endDate: undefined

    })
});

test('should set end date filter', () => {
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    
    }
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: moment(0)

    })

});