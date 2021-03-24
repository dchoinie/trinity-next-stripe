import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    const navItems = [
        {
            name: 'Home',
            to: '/home',
        },
        {
            name: 'Our Church',
            to: '/our-church',
        },
        {
            name: 'Resources',
            to: '/resources',
        },
        {
            name: 'Events',
            to: '/events',
        },
        {
            name: 'Gallery',
            to: '/gallery',
        },
        {
            name: 'Contact',
            to: '/contact',
        },
    ]
    return (
        <div className="bg-red-900">
            <div className="max-w-screen-xl mx-auto py-12">
               <div className="flex flex-col items-center">
                   <ul className="flex mb-4">
                        {navItems.map((item) => (
                            <Link href={item.to}>
                                <a className="mx-2 text-gray-200">
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                   </ul>
                   <ul className="flex text-gray-200 mb-4">
                       <li className="mx-2">
                           <FaFacebook />
                       </li>
                       <li className="mx-2">
                           <FaYoutube />
                        </li>
                       <li className="mx-2">
                           <FaEnvelope />
                        </li>
                   </ul>
                   <p className="text-gray-200">
                        &copy; {new Date().getFullYear()} Trinity Evangelical Lutheran Church, All Rights Reserved
                   </p>
               </div>
            </div>
        </div>
    )
}

export default Footer
