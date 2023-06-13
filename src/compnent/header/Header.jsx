import './header.scss'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


const Header = () => {
  return (
    <div className='header'>
        <div className="left">
            <span>Dealerz.</span>
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