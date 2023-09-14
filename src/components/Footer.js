import React from 'react'
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div>
    <div className='bg14'>
        <div className='container color13'>
            <div className='row justify-content-lg-around justify-content-center'>
                <div className='col-7 col-lg-3 col-md-6 mt-5 mt-lg-0 offset-2 offset-md-0'>
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    < FaFacebookSquare className='font1'/>
                    < FaFacebookMessenger className='font2'/>
                    < FaInstagram className='font2'/>
                    < FaLinkedin className='font2'/>
                </div>
                <div className='col-7 col-lg-2 col-md-6 mt-5 mt-lg-0 offset-2 offset-md-0'>
                    <h3>About</h3>
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Brand Guideline</p>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>

                </div>
                <div className='col-7 col-lg-2 col-md-6 mt-5 mt-lg-0 offset-2 offset-md-0'>
                    <h3>Services</h3>
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Brand Guideline</p>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>

                </div>
                <div className='col-7 col-lg-2 col-md-6 mt-5 mt-lg-0 offset-2 offset-md-0'>
                    <h3>Others</h3>
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Brand Guideline</p>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>

                </div>

            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Footer