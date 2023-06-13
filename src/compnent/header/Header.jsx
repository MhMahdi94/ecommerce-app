import './header.scss'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
        <div className="left">
            <Link to='/' style={{textDecoration:'none'}}>
                <span>Dealerz.</span>
            </Link>
            
        </div>
        <div className="right">
            <div className="item">
                <CallOutlinedIcon/>
                <span>Call Center</span>
            </div>
            <div className="item">
                <LocalShippingOutlinedIcon/>
                <span>Shipping & Returns</span>
            </div>
        </div>
    </div>
  )
}

export default Header