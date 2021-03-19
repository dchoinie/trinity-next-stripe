import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../../components/Button'
import { FaBars, FaPrayingHands } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'


const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="max-w-screen-xl block lg:flex lg:flex-row mx-auto py-2">
            <div className="flex w-full justify-between lg:w-1/4 px-4 lg:pl-0 mb-2 lg:mb-0">
                <Image src="/images/LCMS_logo.png" width={75} height={100} />
                <div className="self-center lg:hidden">
                    {isOpen ? (
                        <GrClose className="text-2xl text-gray-500" onClick={() => setIsOpen(!isOpen)} />
                    ) : (
                        <FaBars className="text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)} />
                    )}
                </div>
            </div>
            <div className="flex lg:w-1/2">
                <ul className="hidden lg:flex w-full flex-row text-base justify-around items-center text-lg">
                    <li className="font-medium text-gray-500 lg:hover:text-gray-900">
                        <span>Home</span>
                    </li>
                    <li className="font-medium text-gray-500 hover:text-gray-900">
                        <span>Our Church</span>
                    </li>
                    <li className="font-medium text-gray-500 hover:text-gray-900">
                        <span>Resources</span>
                    </li>
                    <li className="font-medium text-gray-500 hover:text-gray-900">
                        <span>Events</span>
                    </li>
                    <li className="font-medium text-gray-500 hover:text-gray-900">
                        <span>Gallery</span>
                    </li>
                    <li className="font-medium text-gray-500 hover:text-gray-900">
                        <span>Contact</span>
                    </li>
                </ul>
                {isOpen && (
                    <ul className="lg:hidden flex flex-col w-full p-2">
                        <div className="border border-gray-200 rounded-md shadow-md">
                            <li className="py-2 mt-1 border-l-4 border-transparent text-gray-500 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                <span className="pl-4">Home</span>
                            </li>
                            <li className="py-2 border-l-4 border-transparent text-gray-500 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                <span className="pl-4">Our Church</span>
                            </li>
                            <li className="py-2 border-l-4 border-transparent text-gray-500 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                <span className="pl-4">Resources</span>
                            </li>
                            <li className="py-2 border-l-4 border-transparent text-gray-500 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                <span className="pl-4">Events</span>
                            </li>
                            <li className="py-2 border-l-4 border-transparent text-gray-500 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                <span className="pl-4">Gallery</span>
                            </li>
                            <li className="py-2 border-l-4 border-transparent text-gray-500 font-medium hover:border-blue-600 hover:bg-indigo-100 hover:text-indigo-600 lg:border-0">
                                <span className="pl-4">Contact</span>
                            </li>
                            <li className="flex justify-center py-2 font-medium text-gray-500 bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-bl-md rounded-br-md">
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
                <Button label="Support" bg="bg-indigo-600" bgHover="hover:bg-blue-900" color="text-white" withIcon icon={<FaPrayingHands />} />
            </div>
        </div>
    )
}

export default Header
