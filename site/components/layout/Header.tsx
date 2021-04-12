import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '../../public/images/LCMS_logo.png'
import Button from '../../components/Button'
import { FaBars, FaEnvelope, FaFacebook, FaFacebookSquare, FaPrayingHands, FaYoutube } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'


const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-custom-blue relative shadow-md">
            <div className="max-w-screen-xl block lg:flex lg:flex-row mx-auto py-3">
                <div className="flex w-full justify-between lg:w-1/4 px-4 lg:pl-0 mb-2 lg:mb-0">
                    <div className="bg-gray-100 absolute top-0 p-4 rounded-bl rounded-br shadow-md">
                        <Link href="/">
                            <a>
                                <img src={Logo} alt="LCMS Logo" className="w-16" />
                            </a>
                        </Link>
                    </div>
                    <div className="self-center lg:hidden">
                        {isOpen ? (
                            <GrClose className="text-2xl text-gray-600" onClick={() => setIsOpen(!isOpen)} />
                        ) : (
                            <FaBars className="text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)} />
                        )}
                    </div>
                </div>
                <div className="flex lg:w-1/2">
                    <ul className="hidden lg:flex w-full flex-row text-base justify-around items-center">
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1">
                            <Link href="/">
                                <a className="tracking-wide">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1">
                            <Link href="/our-church">
                                <a className="tracking-wide">
                                    Our Church
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1">
                            <Link href="/resources">
                                <a className="tracking-wide">
                                    Resources
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1">
                            <Link href="/events">
                                <a className="tracking-wide">
                                    Events
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1">
                            <Link href="/gallery">
                                <a className="tracking-wide">
                                    Gallery
                                </a>
                            </Link>
                        </li>
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1">
                            <Link href="/">
                                <a className="tracking-wide">
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {isOpen && (
                        <ul className="lg:hidden flex flex-col w-full p-2">
                            <div className="border border-gray-200 rounded- shadow-">
                                <li className="py-2 mt-1 border-l-4 border-transparent text-gray-600 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                    <span className="pl-4">Home</span>
                                </li>
                                <li className="py-2 border-l-4 border-transparent text-gray-600 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                    <span className="pl-4">Our Church</span>
                                </li>
                                <li className="py-2 border-l-4 border-transparent text-gray-600 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                    <span className="pl-4">Resources</span>
                                </li>
                                <li className="py-2 border-l-4 border-transparent text-gray-600 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                    <span className="pl-4">Events</span>
                                </li>
                                <li className="py-2 border-l-4 border-transparent text-gray-600 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                    <span className="pl-4">Gallery</span>
                                </li>
                                <li className="py-2 border-l-4 border-transparent text-gray-600 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                    <span className="pl-4">Contact</span>
                                </li>
                                <li className="flex justify-center py-2 font-medium text-gray-600 bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-bl- rounded-br-">
                                    <div className="flex">
                                        <span className="mr-2">Support</span>
                                        <FaPrayingHands className="self-center" />
                                    </div>
                                </li>
                            </div>
                        </ul>
                    )}
                </div>
                <div className="hidden lg:flex justify-end items-center w-1/4">
                    <Link href="/donate">
                        <a className="flex border border-white rounded shadow-md px-6 py-1 text-gray-200 hover:bg-gray-200 hover:text-custom-blue">
                            <span className="mr-2">Donate</span>
                            <FaPrayingHands className="self-center" />
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
