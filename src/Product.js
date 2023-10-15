import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';
// a product has different properties so it takes in 'props' as a parameter. Alternatively
// we could list out all the props eg title, id, price instead of just writing 'props'. If we do write 'props'
// we will need to access each specific prop by prop.property name eg. prop.title
function Product( props) {

const [{}, dispatch] = useStateValue();

const addToBasket = async () => {
    // add item to basket
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: props.id,
            title: props.title,
            image: props.image,
            price: props.price,
            rating: props.rating
        }
    })
 }

  return (
    <div className='product'>
        <div className="div product__info">
            <p>{props.title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product__rating">
                {   //initialize an array with 5 elements (since props.rating currently has a value of 5)
                    // then fill it with empty spaces and then maps what is in the map function to those empty spaces
                    Array(props.rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
        <img src={props.image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product