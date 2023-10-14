export const initialState = {
    basket: []
};

function reducer (state, action) {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // logic for adding
            break;
        case "REMOVE_FROM_BASKET":
            // logic for removing
            break;
        default:
            return state;
    }
}

export default reducer;



/** */