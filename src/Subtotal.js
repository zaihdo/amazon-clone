import React from 'react';
import { useStateValue } from './StateProvider';
import { NumericFormat } from 'react-number-format';
import './Subtotal.css'
import { getBasketTotal } from './reducer';

function Subtotal(props) {

  const [{basket}, dispatch] = useStateValue();  

  return (
    <div className="subtotal">
        {/* {price} */}
        <NumericFormat
        
        renderText={value => 
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
                <input type='checkbox'/> This order contains a gift
            </small>
            </>
        }
        decimalScale={3}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'} 
        >
        </NumericFormat>
        
        <button>Proceed to Checkout</button>
    </div>
    )
}


export default Subtotal
