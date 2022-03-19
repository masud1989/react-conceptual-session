import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = (props) => {
    const {setCartCount} = props;
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setProducts(data));
            console.log(products);
    }, [products])
    return (
        <div>
            <h1>Total Products:{products.length} </h1>
            <div className="products-container d-flex">
                {
                    products.map(product => <SingleProduct
                        // productCategory = {product.category}
                        setCartCount = {setCartCount}
                        productDescription = {product.description.slice(0,150)}
                        productPrice = {product.price}
                        productImage = {product.image}
                        productTitle = {product.title}
                    ></SingleProduct>)
                }
            </div>
            
        </div>
    );
};

export default AllProducts;