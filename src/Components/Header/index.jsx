import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";




const Header = () => {
    return (
        <div className="header">
            <div className="top-strip bg-blue text-white">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">
                        Shaya by CaratLane | One of a Kind Silver Jewellery
                    </p>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="d-flex align-items-center "> {/* Flex container */}
                        <div className="logoWrapper">
                            <Link to={'/'}>
                                <img src="/Logo.jpg" alt="Logo" style={{ width: '80px', height: 'auto' }} />
                            </Link>
                        </div>

                      
                            
                            <div className="headerSearch ml-3 mr-3">
    <input
        type="text"
        placeholder="Search For Item"
        className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none"
    />
    <IoSearch className="absolute left-3 text-gray-500 text-xl" />
</div>

                                

                            <div className="d-flex align-items-center ml-auto">
                               
                                <div className="ml-auto cartTab">
                                    <span className="price">$3.29</span>
                                    <Button className="circle" style={{ fontSize: '28px' }}><IoCartSharp /></Button>
                                    <span className ="count d-flex align-items-center justify-content-center">1</span>
                                </div>

                           


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;


