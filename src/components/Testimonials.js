import React from 'react'
import "./Testimonials.css"
import images1 from "./images/Ellipse 5.png"


function Testimonials() {
    return (
        <>
        <div className='text-center mt-3'><h1>Testimonials</h1></div>
            <div className='container mt-5 mb-5'>
                <div className='row justify-content-center'>
                    <div className='col-6 d-lg-flex text-center text-lg-start'>
                       <img src={images1} alt='' className='lastpic' />
                       <p className='mt-lg-0 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorem incidunt consectetur quas sed earum pariatur architecto libero quasi! Id, rem nesciunt commod</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testimonials