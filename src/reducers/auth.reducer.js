const State = {
    auth: null
};

export default (state = State, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                auth: 'Выход'
            };
        case 'LOGOUT':
        return {
          ...state,
            auth: 'Вход'
        };
        default:
            return state;
    }
};