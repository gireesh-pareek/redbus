
import React from 'react'
import Styles from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={Styles.busHire_Footer}>
                <div className={Styles.busHireFooterTextSection}>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>About redBus</h3>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Mobile Version</p>
                        <p>redBus on Mobile</p>
                        <p>Sitemap</p>
                        <p>Offers</p>
                        <p>Careers</p>
                        <p>Values</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Info</h3>
                        <p>T & C</p>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                        <p>Blog</p>
                        <p>Bus Operator registration</p>
                        <p>Agent Registration</p>
                        <p>Insurance Partner</p>
                        <p>User Agreement</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Global Sites</h3>
                        <p>India</p>
                        <p>Singapore</p>
                        <p>Malaysia</p>
                        <p>Indonesia</p>
                        <p>Peru</p>
                        <p>Colombia</p>
                    </div>

                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Our Partners</h3>
                        <p>Goibibo</p>
                        <p>Makemytrip</p>
                    </div>
                </div>
                <div className={Styles.busHireFooterimageSection}>
                    <div><img src="https://www.redbus.in/bushire/static/mwebv2/header/logo_rb.svg" alt="" /></div>
                    <div className={Styles.copyRightText}>Ⓒ 2022 ibibogroup All rights reserved</div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
