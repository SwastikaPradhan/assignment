
import React from "react";
import Slider from "react-slick";
const HomeBanner = () =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true

      };
    return (
        <div className="homesectionbanner">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729664784/1729664783845_New_Project_11.jpg" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729664710/1729664710059_New_Project_13.jpg" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729664746/1729664746011_New_Project_6.jpg" className="w-100"/>
                </div>
            </Slider>

        </div>
    )

}
export default HomeBanner;