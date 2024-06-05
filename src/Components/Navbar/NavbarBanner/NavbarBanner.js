import React from 'react'
import './NavbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavbarBanner = () => {
  return (
    <div className='navbarBanner'>
      <div className="optionsNavbarBanner">
        <MenuIcon className='optionsNavbarBannerIcon' sx={{fontSize:"24px"}}/>
        <div className="allOptionsNavbarBanner">All</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Fresh</div>
        <ArrowDropDownIcon sx={{fontSize: "20px"}}/>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Amazon miniTV</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Sell</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Amazon Pay</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Gift Cards</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Buy Again</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Sell</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Coupons</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Gift Ideas</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Health, Household & Personal Care</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Amazon Basics</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Today's Deal</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Browsing History</div>
        <ArrowDropDownIcon sx={{fontSize: "20px"}}/>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Books</div>
      </div>
      <div className="optionsNavbarBanner">
        <div className="allOptionsNavbarBanner">Customer Service</div>
      </div>
    </div>
  )
}

export default NavbarBanner