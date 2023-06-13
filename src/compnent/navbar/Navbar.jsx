import { Link } from 'react-router-dom'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left" >
            <Link to='/shop' style={{textDecoration:'none'}}>
                <span>Shop</span>
            </Link>
            <Link to='/shop' style={{textDecoration:'none'}}>
                <span>Promo</span>
            </Link>
            <Link to='/shop' style={{textDecoration:'none'}}>
                <span>About</span>
            </Link>
            <Link to='/shop' style={{textDecoration:'none'}}>
                <span>Blog</span>
            </Link>
        </div>
        <div className="center">
            <input type="text" placeholder='Search what you need' />
            <SearchOutlinedIcon/>
        </div>
        <div className="right">
            <FavoriteBorderOutlinedIcon/>
            <ShoppingCartOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
        </div>
    </div>
  )
}

export default Navbar