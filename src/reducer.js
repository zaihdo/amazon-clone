export const initialState = {
    basket: [{
        id:"1",
              title:"Apple EarPods Headphones with Lightning Connector.",
              price:11.96,
              rating:5,
              image:"https://m.media-amazon.com/images/I/41-aexp44tL._AC_SX466_.jpg"
    },{
        id:"2",
              title:"Apple EarPods Headphones with Lightning Connector.",
              price:11.96,
              rating:5,
              image:"https://m.media-amazon.com/images/I/41-aexp44tL._AC_SX466_.jpg"
    }]
};

// learn javascript reduce function
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

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
            let newBasket = [...state.basket];
            
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            
            if (index >= 0) {
                // item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in the basket.`
                );
            }
            return { 
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;



/** */