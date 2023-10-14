export const initialState = {
    basket: ["bread", ""]
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // logic for adding
            return { 
                state
                //basket: [...state.basket, action.item] // include what is currently in the basket + what was just dispatched through the action
            }
        case "REMOVE_FROM_BASKET":
            // logic for removing
            return { state }
        default:
            return state;
    }
}

export default reducer;



/** */