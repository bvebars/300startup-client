const State = {
    isLoading: false,
    products: null
};

export default (state = State, action) => {

    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                products: action.payload,
                isLoading: true,
            };
        case 'SET_IS_READY':
        return {
          ...state,
            isLoading: action.payload
        };
        default:
            return state;
    }
};