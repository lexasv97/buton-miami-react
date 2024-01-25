import React from 'react'
import { IoSearch, IoCartOutline, IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import logo from '../../public/buton_logo.jpg'
import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context";
import { RxCross2 } from "react-icons/rx";
import { ReactSearchAutocomplete } from 'react-search-autocomplete' //


const Navbar = () => {

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
        <div className='bg-purple'>
            <div className='flex justify-between'>
                <div>
                    <img src='' />
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