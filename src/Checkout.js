import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout () {
    const [{basket}] = useStateValue();
    
    return (
    <div className='checkout'>
        <div className="checkout__left">
        <img 
            className="checkout__ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2023/img/X_Site/XCM_CUTTLE_1626551_3395727_1500x150_en_CA.jpg" 
            alt="Ad for Coupon" 
        />
        {basket && basket.length === 0 
        ? (
            <div>
                <h2>Your Amazon Cart is empty.</h2>
                <p>
                Your shopping cart lives to serve. Give it purpose \- fill it with groceries, clothing, household supplies, electronics and more.
Continue shopping on the Amazon.ca homepage, learn about today's deals, or visit your Wish List.
                </p>
            </div>

        ) : (
            <div>
                <h2 className='checkout__title' >Your Shopping Basket</h2>
                {/* List all products */}
                {basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        )}    
        </div> 
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>
        )}
    </div>
    );
}

export default Checkout;