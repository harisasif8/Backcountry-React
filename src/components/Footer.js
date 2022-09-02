import React from 'react';
import logo from '../assets/images/header/backcountrylogo.jpeg'
import '../css/footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            
            <div className='footer-discount'>
                <div className='need-help'>
                    <h4>Need Help?</h4>
                    <p>Talk to our Gearheads about your needs.</p>
                    <button>Chat Now</button>
                    <h4>Or Call: 1-800-409-4502</h4>
                </div>

                <div className='discount-info'>
                    <h4>15% Off Your First Order</h4>
                    <p>And get the scoop on sales & new gear!</p>
                    <h5> <label htmlFor="">Email Address *</label></h5>
                    <div className='email-input'>
                        <input type="text" placeholder='email@backcountry.com' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

            <div className='other-companies'>
                <h6>Other Backcountry Companies:</h6>
                <p>Competitive Cyclist</p>
                <p>Steep & Cheap</p>
                <p>MotoSport</p>
                <p>Bergfreunde</p>
            </div>

            <p className='copyrights'>© Backcountry.com - All Rights Reserved</p>

            <div className='footer-logo'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
}

export default Footer;
