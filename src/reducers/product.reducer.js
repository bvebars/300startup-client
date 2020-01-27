const State = {
    products: [],
    ids: [],
};

export default (state = State, action) => {

    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                products: action.payload
            };

        case 'ADD-PRODUCT':

            return {
                ...state,
                products: [...state.products, action.payload]
            };

        default:
            return state;
    }
};