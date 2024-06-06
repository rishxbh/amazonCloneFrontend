import React, { useState } from 'react'
import './HomeScreenTop.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


const imageLinks = ["https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/CommunitySale/2024/NordSeries/D134369591_WLD_OnePlus_NordSeries_PC_Hero_3000x1200_multiclick_1._CB554953640_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Smartwatch_Tallhero_3000x1200._CB554952402_.jpg", "https://m.media-amazon.com/images/I/913e6DG4GwL._SX3000_.png", "https://m.media-amazon.com/images/I/81l8d7SE1RL._SX3000_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/June2024/55/Samsung_BAU_Homepage_DesktopHeroTemplate_3000x1200._CB556515143_.jpg"];

const HomeScreenTop = () => {
    const [imageNumber, setImageNumber] = useState(0);
    const forward = () => {
        if (imageNumber < imageLinks.length - 1) {
            setImageNumber(imageNumber + 1);
        } else {
            setImageNumber(0);
        }
    }
    const backward = () => {
        if (imageNumber === 0) {
            setImageNumber(imageLinks.length - 1);
        } else {
            setImageNumber(imageNumber - 1);
        }
    }
    return (
        <div className='homeScreenTop'>
            <div className="homeScreenTopBanner">
                <img src={imageLinks[imageNumber]} alt="" className="bannerImage" />
                <div className="homeScreenTopBannerBack" onClick={forward}>
                    <ArrowForwardIosOutlinedIcon className='backButton' sx={{fontSize:"60px",color:"grey"}} />
                </div>
                <div className="homeScreenTopBannerForw" onClick={backward}>
                <ArrowForwardIosOutlinedIcon sx={{fontSize:"60px",color:"grey"}} />
                </div>
            </div>

        </div>
    )
}

export default HomeScreenTop