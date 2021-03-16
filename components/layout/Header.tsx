import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'

const Header = (): JSX.Element => {
    return (
        <div className="flex pt-2 relative z-10 text-white" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
            <div className="flex w-1/6 items-center text-xl">
                <FaFacebook className="mr-2" />
                <FaYoutube className="mr-2" />
                <FaTwitter className="mr-2" />
            </div>
            <div className="flex w-2/3 justify-center">
                <ul className="flex w-full justify-around items-center">
                    <li>Home</li>
                    <li>Our Church</li>
                    <li>Events</li>
                    <Image
                        src="/images/LCMS_logo.png"
                        alt="LCMS Logo"
                        width={75}
                        height={100}
                    />
                    <li>Services</li>
                    <li>Resources</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div className="flex w-1/6 justify-center">
                <button>Support</button>
            </div>
        </div>
    )
}

export default Header
