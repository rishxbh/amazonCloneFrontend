import React, { useState } from 'react'
import './HomeScreenTop.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


const imageLinks = ["https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/CommunitySale/2024/NordSeries/D134369591_WLD_OnePlus_NordSeries_PC_Hero_3000x1200_multiclick_1._CB554953640_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Smartwatch_Tallhero_3000x1200._CB554952402_.jpg", "https://m.media-amazon.com/images/I/913e6DG4GwL._SX3000_.png", "https://m.media-amazon.com/images/I/81l8d7SE1RL._SX3000_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/June2024/55/Samsung_BAU_Homepage_DesktopHeroTemplate_3000x1200._CB556515143_.jpg"];
const imageAndNames =
    [
        {
            "external": "Revamp your home in style",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg", "name": "Cushion Cover and Bedsheets" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg", "name": "Figurines, vases and more" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg", "name": "Home Storage" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg", "name": "Lighting Solutions" }
            ]
        },
        {
            "external": "Appliances for your home | Up to 55% off",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg", "name": "Air Conditioners" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg", "name": "Refrigerators" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg", "name": "Microwaves" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg", "name": "Washing Machines" }
            ]
        },
        {
            "external": "Starting ₹99 | Amazon Brands & more",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_Week19_186_001._SY116_CB557385001_.jpg", "name": "Starting Rs 179 | Home Decor" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_PC_186x116_6_PB._SY116_CB560732407_.jpg", "name": "Upto 60% off | Storage and Racks" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_PC_186x116_7_PB._SY116_CB560732407_.jpg", "name": "Starting Rs 99 | Toys and Games" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/PC_QC/1x_spb._SY116_CB580758260_.png", "name": "Upto 60% off | Jackets, Dresses and more" }
            ]
        },
        {
            "external": "Starting ₹199 | Amazon Brands & more",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_186_2._SY116_CB558389341_.jpg", "name": "Starting Rs 199 | Bedsheets" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_186_3._SY116_CB558389341_.jpg", "name": "Starting Rs 199 | Curtains" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_186_4._SY116_CB558389341_.jpg", "name": "Min. 40% off | Ironing boards & more" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_186_1._SY116_CB558389341_.jpg", "name": "Upto 60% off | Home decor" },
            ]
        },
        {
            "external": "Automotive essentials | Up to 60% off",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg", "name": "Cleaning accessories" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg", "name": "Tyre and Rim Care" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg", "name": "Helmet" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg", "name": "Vacuum cleaner" }
            ]
        },
        {
            "external": "Up to 60% off | Styles for women",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg", "name": "Women's clothing" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg", "name": "Footwear + Handbag" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg", "name": "Watches" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg", "name": "Fashion Jewellery" }
            ]
        },
        {
            "external": "Min. 40% off | Baby essentials | Amazon brands",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/QC_PC_186x116_13._SY116_CB556513092_.jpg", "name": "Diapers and Wipes" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/QC_PC_186x116_2._SY116_CB556513092_.jpg", "name": "Cradles, Rockers and more" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/QC_PC_186x116_9._SY116_CB556513092_.jpg", "name": "Toys" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/QC_PC_186x116_9._SY116_CB556513092_.jpg", "name": "Visit the store" }
            ]
        },
        {
            "external": "Up to 60% off | Professional tools, testing & more",
            "internal": [{ "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg", "name": "Professional tools" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg", "name": "Measuring intruments" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg", "name": "Cleaning supplies" },
            { "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg", "name": "Medical supplies" }
            ]
        }
    ]

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
                    <ArrowForwardIosOutlinedIcon className='backButton' sx={{ fontSize: "60px", color: "grey" }} />
                </div>
                <div className="homeScreenTopBannerForw" onClick={backward}>
                    <ArrowForwardIosOutlinedIcon sx={{ fontSize: "60px", color: "grey" }} />
                </div>
            </div>
            <div className="homeScreenTopBelt">
                {
                    imageAndNames.map((imageAndName) => (
                        <div className="card">
                            <div className="title">
                                {imageAndName.external}
                            </div>
                            <div className="allTiles">
                                {
                                    imageAndName.internal.map((info) => (
                                        <div className="tile">
                                            <img src={info.link} alt="" className = "tileImage"/>
                                            <div className="tileTitle">{info.name}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                
            </div>

        </div>
    )
}

export default HomeScreenTop