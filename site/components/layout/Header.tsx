import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '../../public/images/LCMS_logo.png'
import Button from '../../components/Button'
import { FaBars, FaEnvelope, FaFacebook, FaFacebookSquare, FaPrayingHands, FaYoutube } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'


const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isOurChurchOpen, setIsOurChurchOpen] = useState(false)
    return (
        <nav className="bg-custom-blue relative shadow-md">
            <div className="max-w-screen-xl block lg:flex lg:flex-row mx-auto py-3">
                <div className="flex w-full justify-between lg:w-1/4 px-4 lg:pl-0 mb-2 lg:mb-0">
                    <Link href="/">
                        <a>
                            <div className="bg-gray-100 absolute top-0 p-4 rounded-bl rounded-br shadow-md">
                                <img src={Logo} alt="LCMS Logo" className="w-16" />
                            </div>
                        </a>
                    </Link>
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
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1 cursor-pointer" onMouseEnter={():void => setIsOurChurchOpen(true)} onMouseLeave={(): void => setIsOurChurchOpen(false)}>
                            <span className="traking-wide relative" onClick={():void => setIsOurChurchOpen(!isOurChurchOpen)}>Our Church</span>
                            {isOurChurchOpen && (
                                <div className="absolute bg-gray-200 w-44 rounded shadow-md py-2 px-4">
                                    <ul className="flex-flex-col text-gray-800">
                                        <li className="mt-2 mb-2">
                                            <Link href="/who-we-are">
                                                <a className="tracking-wide">Who We Are</a>
                                            </Link>
                                        </li>
                                        <li className="mt-2 mb-2">
                                            <Link href="/">
                                                <a className="tracking-wide">What We Believe</a>
                                            </Link>
                                        </li>
                                        <li className="mt-2 mb-2">
                                            <Link href="/">
                                                <a className="tracking-wide">Our Staff</a>
                                            </Link>
                                        </li>
                                        <li className="mt-2 mb-2">
                                            <Link href="/">
                                                <a className="tracking-wide">Worship Schedule</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="text-gray-200 hover:text-white border-b border-transparent hover:border-white mt-1 cursor-pointer" onMouseEnter={():void => setIsResourcesOpen(true)} onMouseLeave={(): void => setIsResourcesOpen(false)}>
                            <span className="traking-wide relative" onClick={():void => setIsResourcesOpen(!isResourcesOpen)}>Resources</span>
                            {isResourcesOpen && (
                                <div className="absolute bg-gray-200 w-44 rounded shadow-md py-2 px-4">
                                    <ul className="flex-flex-col text-gray-800">
                                        <li className="mt-2 mb-2">
                                            <Link href="/sermons">
                                                <a className="tracking-wide">Sermons</a>
                                            </Link>
                                        </li>
                                        <li className="mb-2">Resource 2</li>
                                        <li className="mb-2">Resource 3</li>
                                        <li className="mb-2">Resource 4</li>
                                        <li className="mb-2">Resource 5</li>
                                    </ul>
                                </div>
                            )}
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
                            <Link href="/contact">
                                <a className="tracking-wide">
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {isOpen && (
                        <div>mobile menu</div>
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
