import React from 'react'
import { IoSearch, IoCartOutline, IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
// import logo from '../../public/buton_logo.jpg'
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context";
import { RxCross2 } from "react-icons/rx";
import { ReactSearchAutocomplete } from 'react-search-autocomplete' //
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

const Navbar = () => {

    const cld = new Cloudinary({ cloud: { cloudName: 'ddvlnojuu' } });

    const myImage = cld.image('docs/logo');

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    // myImage.resize(fill());
    // resize picture

    const [click, setClick] = useState<boolean>(false);
    const { isLoggedIn, user } = useContext(AuthContext)!

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    const handleSearchClick = () => {

    }

    const mobileMenu = <div className="">
        <ul className="">

            <div>
                <Link to='/'>
                    Home                </Link>
            </div>
            <div>
                <Link to='/purchase-guarantees'>Terms & Conditions</Link>
            </div>
            <div>
                <Link to='/flower-care'>Flower Care</Link>
            </div>
            <div>
                <Link to='faqs'>FAQs</Link>
            </div>
            <div>
                <Link to='privacy-policy'>Privacy Policy</Link>
            </div>
            <div>
                <Link to='/contact-us'>Contact us</Link>
            </div>
            <div>
                <Link to='/signup'>Signup</Link>
            </div>

            <div>
                <Link to='/login'>Log in</Link>
            </div>

            <div>
                <button>Shop Now</button>
            </div>

        </ul>
    </div>
    return (
        <div className='bg-purple h-1/5'>
            <div className='flex justify-between'>
                <div className=''>
                    <AdvancedImage cldImg={myImage} />
                </div>
                <div className='flex justify-between gap-4'>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/purchase-guarantees'>Terms & Conditions</Link>
                    </div>
                    <div>
                        <Link to='/flower-care'>Flower Care</Link>
                    </div>
                    <div>
                        <Link to='faqs'>FAQs</Link>
                    </div>
                    <div>
                        <Link to='privacy-policy'>Privacy Policy</Link>
                    </div>
                    <div>
                        <Link to='/contact-us'>Contact us</Link>
                    </div>
                </div>
                <div>
                    <button>Shop Now</button>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    <button onClick={handleSearchClick}>
                        <IoSearch />
                    </button>
                    <button>
                        <CgProfile />
                    </button>
                    <Link to='/cart'>
                        <IoCartOutline />
                    </Link>
                </div>
                <div>
                    {click && mobileMenu}

                    <button onClick={() => setClick(!click)}>
                        {click ? <RxCross2 /> : <IoMenu />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar