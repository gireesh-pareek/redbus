
import React from 'react'
import Styles from './Subfooter.module.css'

const SubFooter = () => {
    return (
        <div>
            <div className={Styles.subFootercontainer}>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Top Bus Routes</h4>
                    <p>Hyderabad to Bangalore Bus</p>
                    <p>Bengalore to Chennai Bus</p>
                    <p>Pune to Bangalore Bus</p>
                    <p>Mumbai to Bangalore Bus</p>
                    <p>More</p>
                </div>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Top Cities</h4>
                    <p>Hyderabad Bus Tickets</p>
                    <p>Bangalore Bus Tickets</p>
                    <p>Chennai Bus Tickets</p>
                    <p>Pune Bus Tickets</p>
                    <p>More</p>
                </div>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Top RTC's</h4>
                    <p>APSRTC</p>
                    <p>GSRTC</p>
                    <p>MSRTC</p>
                    <p>TNSTC</p>
                    <p>More</p>
                </div>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Other</h4>
                    <p>TSRTC</p>
                    <p>SBSTC</p>
                    <p>RSRTC</p>
                    <p>KerlaRTC</p>
                    <p>More</p>
                </div>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Tempo travellers in other cities</h4>
                    <p>Tempo travellers in Banglore</p>
                    <p>Tempo travellers in Chennai</p>
                    <p>Tempo travellers in Mumbai</p>
                    <p>Tempo travellers in Hyderabad</p>
                    <p>Tempo travellers in Ahmedabad</p>
                </div>
            </div>
        </div>
    )
}

export default SubFooter
