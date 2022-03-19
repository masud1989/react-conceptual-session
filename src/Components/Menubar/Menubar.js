import React from 'react';
import './Menubar.css'

const Menubar = (props) => {
    // console.log(country);
    return (
        <div className=''>
            <div className="mx-auto">
                <div className="row bg-secondary p-2">
                    <div className="col-md-2 p-2 ">Logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className='text-white items me-4 p-2'>Home</li>
                        <li className='text-white items me-4 p-2'>Shop</li>
                        <li className='text-white items me-4 p-2'>Cart<sup>{props.count}</sup></li>
                        <li className='text-white items me-4 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;