import React from 'react'
import './NavbarBelt.css'
import amazonlogo from '../../../assets/amazonlogoo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import india from '../../../assets/india.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavbarBelt = () => {
  return (
    <div className='navbarBelt'>
        <div className="leftNavbarBelt">
            <div className="leftNavbarBeltLogo">
                <img src={amazonlogo} alt="" className="amazonLogoNavbar" />
                <span className="navbar_inLogo">.in</span>
            </div>
            <div className="navbarBeltLocation">
                <div className="navbarBeltLocationImg">
                    <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontSize : "22px"}} />
                </div>
                <div className="navbarBeltLocationPlace">
                    <div className="navbarBeltLocationPlaceTop">Delivering to Ravi</div>
                    <div className="navbarBeltLocationPlaceBottom">Delhi 110001</div>
                </div>
            </div>
        </div>
        <div className="navbarBeltSearchBox">
            <div className="navbarBeltSearchDiv">
                <div className="navbarBeltSearchBoxAll">
                    <div className="navbarBeltSearchBoxAllText">All</div>
                    <ArrowDropDownIcon sx={{fontSize: "30px"}}/>
                </div>
                <input type="text" className="navbarBeltInputSearchBox" placeholder='Search Amazon.in' />
                <div className="searchIconNavbarBelt">
                    <SearchIcon className='searchIconNavbarBeltIcon' sx = {{fontSize:"26px"}} />
                </div>
            </div>
        </div>
        <div className="rightNavbarBelt">
            <div className="indianFlagCode">
                <img src={india} alt="" className="indianFlag" />
                <div className="indianCodeNavbarBelt">EN <ArrowDropDownIcon sx={{fontSize:"16px", marginTop:1,marginLeft:-0.4}} className='indianCodeNavbarBeltDrop'/></div>
            </div>
            <div className="helloSigninNavbarBelt">
                <div className="helloTopNavbarBelt">Hello, User</div>
                <div className="indianCodeNavbarBelt">Account & Lists</div>
            </div>
            <div className="helloSigninNavbarBelt">
                <div className="helloTopNavbarBelt">Returns</div>
                <div className="indianCodeNavbarBelt">& Orders</div>
            </div>
            <div className="helloSigninNavbarBelt">
                <span className="cartItemNumberNavbarBelt">2</span>
                <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon/> <span className="cartTitle">Cart</span></div>
            </div>
        </div>
    </div>
  )
}

export default NavbarBelt