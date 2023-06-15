import './footer.scss';
import placholder from '../../assets/placeholder.png';
import logo from '../../assets/Dealerz..png';
import socmed1 from '../../assets/Socmed-1.png';
import socmed2 from '../../assets/Socmed-2.png';
import socmed3 from '../../assets/Socmed-3.png';
import socmed from '../../assets/Socmed.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="left">
            <img src={placholder} alt="" />
        </div>
        <div className="right">
            <div className="top">
                <img src={logo} alt="" />
                <div className="socmed">
                    <img src={socmed1} alt="" />
                    <img src={socmed2} alt="" />
                    <img src={socmed3} alt="" />
                    <img src={socmed} alt="" />
                </div>
            </div>
            
            <div className="center">
                <span>Privacy Policy</span>
                <span>Terms and Condition</span>
            </div>

            <div className="bottom">
            @2020 TanahAir Studio. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer