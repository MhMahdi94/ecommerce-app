import './achievment.scss'
import logo1 from '../../assets/logo 1.png';
import logo2 from '../../assets/logo 2.png';
import logo3 from '../../assets/logo 3.png';
import logo4 from '../../assets/logo 4.png';
import logo5 from '../../assets/logo 5.png';
import logo6 from '../../assets/logo 6.png';
const Achievment = () => {
  return (
    <div className='achievment'>
        <span>Our Achievement</span>
        <div className="logos">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
        </div>
    </div>
  )
}

export default Achievment