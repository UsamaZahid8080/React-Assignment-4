import React from 'react'
import "./Cardmini.css"
import Card from 'react-bootstrap/Card';
import images1 from "./images/image 1.png"
import images2 from "./images/image 2.png"
import images3 from "./images/image 3.png"
import images4 from "./images/image 4.png"


function Cardmini() {
  return (
    <>
    <div className='container'>
        <div className='row justify-content-around mt-5 mb-5'>
            <div className='col-7 col-lg-2 col-md-4 text-center mt-5 ms-5 ms-lg-0 offset-2 offset-md-0'>
            <Card style={{ width: '12rem',backgroundColor:"MintCream",padding:"20px 20px 20px 20px",borderRadius:"20px" }}>
         <img src={images1} alt='' className='img-fluid img2'/>
      <Card.Body>
        <Card.Title>1500+ Topics</Card.Title>
        <Card.Text>
         Learn Anything
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
            <div className='col-7 col-lg-2 col-md-4 ms-sm-5 col-md-0 text-center mt-5 mb-5 ms-5 ms-lg-0 offset-2 offset-md-0'>
            <Card style={{ width: '12rem', backgroundColor:"white",padding:"20px 20px 20px 20px",borderRadius:"20px" }} className='shadow'>
         <img src={images2} alt='' className='img-fluid img2'/>
      <Card.Body>
        <Card.Title>1800+ Students</Card.Title>
        <Card.Text>
         Learn Anything
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
            <div className='col-7 col-lg-2 col-md-4 text-center mt-5 mb-5 ms-5 ms-lg-0 offset-2 offset-md-0'>
            <Card style={{ width: '12rem',backgroundColor:"MintCream",padding:"20px 20px 20px 20px",borderRadius:"20px" }}>
         <img src={images3} alt='' className='img-fluid img2'/>
      <Card.Body>
        <Card.Title>9K+ Test Token</Card.Title>
        <Card.Text>
         Learn Anything
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
            <div className='col-7 col-lg-2 col-md-4 text-center mt-5 mb-5 ms-5 ms-lg-0 offset-2 offset-md-0'>
            <Card style={{ width: '12rem',backgroundColor:"MintCream",padding:"20px 20px 20px 20px",borderRadius:"20px" }}>
         <img src={images4} alt='' className='img-fluid img2'/>
      <Card.Body>
        <Card.Title>2000+ Student</Card.Title>
        <Card.Text>
         Learn Anything
        </Card.Text>
      </Card.Body>
    </Card>

            </div>

        </div>

    </div>
    </>
  )
}

export default Cardmini