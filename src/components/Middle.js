import React from 'react'
import "./Middle.css"
import Button1 from './Button1'
import images1 from "./images/Frame.png"

function Middle() {
    return (
        <>
            <div>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 col-8 offset-lg-1 offset-4'>
                            <p style={{ color: "red" }}>Are You Ready to Learn?</p>
                            <h1>Learn With Fun<br />on <span style={{ color: "green" }} >any Schedule</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing<br />elit.Varius blandit facilis quam netus.</p>
                            <Button1 style={{backgroundColor:"green",color:"white",border:"none",padding:"5px 30px",borderRadius:"20px"}}>Get Started</Button1>
                        </div>
                        <div className='col-lg-6 mt-5 mt-lg-0   '>
                            <img src={images1} alt='' className=' img-fluid' />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Middle