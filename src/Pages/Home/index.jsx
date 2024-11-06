import React from 'react';
import HomeBanner from '../../Components/HomeBanner';
import { FaArrowCircleRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import Slider from 'react-slick'; // Import react-slick for carousel
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductItem from '../../Components/productItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
    const productslideroption = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,

    };

    return (
        <>
            <HomeBanner />
            <div className="container mx-auto">
                {/* Main flex container to arrange content horizontally */}
                <div className="flex items-center justify-between space-x-8 py-4">

                    <div>
                        <h3 className="text-lg font-bold">Best Seller</h3>
                        <p className="text-black">Do not miss the current offers until the end of December</p>
                    </div>

                    <div className="flex-auto">
                        <Button
                            variant="outlined"
                            color="inherit"
                            className="text-black border-black"
                            endIcon={<FaArrowCircleRight />}
                        >
                            View All
                        </Button>
                    </div>
                </div>

                <div className="product_row w-100 mt-4">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <ProductItem/>
                           

                        </SwiperSlide>


                        <SwiperSlide>
                        <ProductItem/>
                            
                        </SwiperSlide>


                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem/>
                            
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem/>
                            
                        </SwiperSlide>

                        <SwiperSlide>
                        <ProductItem/>
                            
                        </SwiperSlide>






                        {/* Add additional slides as needed */}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Home;




