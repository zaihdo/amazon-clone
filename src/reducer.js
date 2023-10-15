export const initialState = {
    basket: [{
        id:"1",
              title:"Apple EarPods Headphones with Lightning Connector.",
              price:11.96,
              rating:5,
              image:"https://m.media-amazon.com/images/I/41-aexp44tL._AC_SX466_.jpg"
    },{
        id:"1",
              title:"Apple EarPods Headphones with Lightning Connector.",
              price:11.96,
              rating:5,
              image:"https://m.media-amazon.com/images/I/41-aexp44tL._AC_SX466_.jpg"
    }]
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // logic for adding
            return { 
                ...state,
                basket: [...state.basket, action.item] // include what is currently in the basket + what was just dispatched through the action
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