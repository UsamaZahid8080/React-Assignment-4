import React from 'react'
import "./Online.css"
import Card from 'react-bootstrap/Card';
import images1 from "./images/Rectangle 6.png"
import images2 from "./images/Rectangle 13.png"
import images3 from "./images/Rectangle 15.png"
import Button1 from './Button1';

function Online() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col text-center mt-2'>
                        <h1>Online Courses</h1>
                    </div>

                </div>

            </div>
            <div className='container mt-3'>
                <div className='row justify-content-md-around mb-5'>
                    <div className='col-7 col-lg-3 col-md-6 text-center mt-5 mt-md-3 mt-lg-0 offset-md-0 offset-2'>
                        <Card style={{ width: '18rem' }} className='shadow'>
                            <img src={images1} alt='' />
                            <Card.Body>
                                <Card.Title>Modern Psychology</Card.Title>
                                <Card.Text>
                                Designation
                                </Card.Text>
                                <Button1 style={{backgroundColor:"green",border:"none",borderRadius:"30px",padding:"8px 30px"}}>BUY COURSE</Button1>
                                <p className='mt-3'>Start 20 April 2021 60 seat</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-7 col-lg-3 col-md-6 text-center mt-5 mt-md-3 mt-lg-0 offset-md-0 offset-2'>
                        <Card style={{ width: '18rem' }} className='shadow'>
                            <img src={images2} alt='' />
                            <Card.Body>
                                <Card.Title>Modern Psychology</Card.Title>
                                <Card.Text>
                                Designation
                                </Card.Text>
                                <Button1 style={{backgroundColor:"green",border:"none",borderRadius:"30px",padding:"8px 30px"}}>BUY COURSE</Button1>
                                <p className='mt-3'>Start 20 April 2021 60 seat</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-7 col-lg-3 col-md-6 text-center mt-5 mt-md-5 mt-lg-0 offset-md-0 offset-2'>
                        <Card style={{ width: '18rem' }} className='shadow'>
                            <img src={images3} alt='' />
                            <Card.Body>
                                <Card.Title>Modern Psychology</Card.Title>
                                <Card.Text>
                                Designation
                                </Card.Text>
                                <Button1 style={{backgroundColor:"green",border:"none",borderRadius:"30px",padding:"8px 30px"}}>BUY COURSE</Button1>
                                <p className='mt-3'>Start 20 April 2021 60 seat</p>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Online