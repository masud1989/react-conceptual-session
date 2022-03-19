import React from 'react';
import './SingleProduct.css';


const SingleProduct = (props) => {
    const {setCartCount} = props;
    return (
        <div className='col-md-4'>
            <div className="card p-3 border-2 m-3">
               
                <h2>{props.productTitle.slice(0,30)}</h2>
                <img className='w-50 m-auto' src={props.productImage} alt="" />
                <h2>Price:{props.productPrice}</h2>
                <p>{props.productDescription}</p>
                <div className="btn-container d-flex m-auto">
                    <button onClick={setCartCount} className='btn btn-success m-2 p-2'>Add to Cart</button>
                    <button className='btn btn-info m-2 p-2'>Details</button>
                    <button className='btn btn-danger m-2 p-2'>Delete</button>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;