import { useState } from 'react';

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { TfiFullscreen } from "react-icons/tfi";
import Slider from 'react-slick';
import { FaHeartCircleCheck } from "react-icons/fa6";
import ProductModel from './ProductModel';

const ProductItem = () => {

    const [isOpenProductModel, setisOpenProductModel] = useState(false);

    const viewProductDetails = (id) => {
        setisOpenProductModel(true);
    }

    const clodeProductModel =()=>{
        setisOpenProductModel(false);
    }






    return (
        <>
            <div className="item productItem">
                <div className="imgwrapper" onClick= {viewProductDetails}>
                    <img
                        src="https://images.cltstatic.com/media/product/350/AW00025-BR0000-gal-mithi-paasa-in-gold-plated-brass-prd-1-model.jpg"
                        className="w-100 cursor-pointer"
                        alt="Product Image"
                    />
                    <span className="badge badge-primary">28%</span>
                    
                </div>
                <h4>Gal Mithi Paasa in Gold Plated Brass</h4>
               

               

                <div className="flex text-[18px] font-bold text-[rgba(0,0,0,0.4)]">
                    <span className="line-through mr-3">$20.00</span>
                    <span className="text-danger ml-3 text-[18px] font-bold">$10.00</span>
                </div>

                
            </div>



            {
                isOpenProductModel===true && <ProductModel   clodeProductModel= {clodeProductModel}/>
            }


        </>




    )
}
export default ProductItem;