import authReducer from '../../reducers/auth';


test('should set uid for login', () => {
    const uid = 1234;
    const action = {
        type: 'LOGIN',
        uid: uid
    }
    const state = authReducer({}, action);
    console.log(state);
    expect(state.uid).toEqual( action.uid )
    expect(state).toEqual( {uid} )
    console.log(state.uid)
});
test('should clear uid for logout', () => {
    const uid = 1234;
    const action = {
        type: 'LOGOUT',
        uid: uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual( {} );
});


