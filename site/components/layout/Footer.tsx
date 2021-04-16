import React from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import Logo from '../../public/images/LCMS_logo.png'

type Props = {
    verseData?: any;
}

const Footer: React.FC<{verseData: any}> = ({verseData}) => {
    console.log(verseData);
    
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
    const socialLinks = [
        {
            title: 'Facebook',
            to: 'https://www.facebook.com/trinitylutheranwaterville',
            icon: <FaFacebook className="self-center" />,
        },
        {
            title: 'YouTube',
            to: 'https://www.youtube.com/channel/UCEAuBFRtig5R-Vj-Jon6MIw',
            icon: <FaYoutube className="self-center" />,
        },
    ]
    return (
        <>
            <div className="bg-blue-100">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-4 pt-12">
                        <div className="flex flex-col text-gray-600">
                            <img src={Logo} alt="LCMS logo" className="w-16 mb-4" />
                            <a href="https://goo.gl/maps/LYCXfoFNFmnDtn6x9" target="_blank" rel="noopener noreferrer" className="flex flex-col mb-4">
                                <span className="leading-tight">415 Lake Street West</span>
                                <span className="leading-tight">Waterville, MN, 56096</span>
                            </a>
                            <a href="tel:1-507-362-4454" className="mb-4">507.362.4454</a>
                            <a href="mailto:tlchurch@frontiernet.net">tlchurch@frontiernet.net</a>
                        </div>
                        <div className="flex">
                            <ul className="flex flex-col text-gray-600">
                                <li>
                                    <h6 className="text-custom-blue mb-4 font-bold">Navigation</h6>
                                </li>
                                <li className="mb-2">Home</li>
                                <li className="mb-2">Our Church</li>
                                <li className="mb-2">Resources</li>
                                <li className="mb-2">Events</li>
                                <li className="mb-2">Gallery</li>
                                <li className="mb-2">Contact</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <ul className="flex flex-col text-gray-600">
                                <li>
                                    <h6 className="text-custom-blue mb-4 font-bold">Resources</h6>
                                </li>
                                <li className="mb-2">CTSFW Media</li>
                                <li className="mb-2">Concordia Theological Seminary</li>
                                <li className="mb-2">Lutheran Church Missouri Synod</li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="text-custom-blue mb-4 font-bold">
                                Stay Updated
                            </h6>
                            <p className="text-gray-600 mb-2">Subscribe to our newsletter for the latest news from Trinity Evangelical Lutheran Church</p>
                            <form action="https://trinitywaterville.us1.list-manage.com/subscribe/post" method="POST">
                                <input type="hidden" name="u" value="f63d0bb6003096c48a2ff3527" />
                                <div className="flex">
                                    <input type="email" name="MERGE0" id="MERGE0" size={25} placeholder="email" className="p-2 rounded-tl rounded-bl" required />
                                    <button type="submit" className="bg-custom-blue text-gray-200 p-2 rounded-tr rounded-br">Sign Up</button>
                                </div>
                                <input type="hidden" name="id" value="0cff9ce894" />
                            </form>
                        </div>
                    </div>
                    <hr className="my-6 border-custom-blue"/>
                    <div className={cx('flex', 'justify-center', verseData ? '' : 'pb-6')}>
                    {socialLinks.map((socialLink) => {
                        return (
                            <div className="flex mr-4" key={socialLink.title}>
                                <span className="flex justify-center mr-2 self-center bg-custom-blue text-gray-200 rounded-full h-8 w-8">
                                    {socialLink.icon}
                                </span>
                                <span className="self-center">
                                    {socialLink.title}
                                </span>
                            </div>
                        )
                    })}
                    </div>
                    {verseData && (
                        <>
                            <hr className="my-6 border-custom-blue"/>
                            <div className="flex flex-col items-center pb-6">
                                <p className="italic text-center">
                                    {verseData.verse.details.text}
                                </p>
                                <p>
                                    -{verseData.verse.details.reference}
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <div className="bg-custom-blue">
                    <div className="max-w-screen-xl mx-auto flex w-full justify-between py-6 text-gray-200">
                        <div className="flex">
                            <span className="mr-4">Terms &amp; Conditions</span>
                            <span>Privacy Policy</span>
                        </div>
                        <div className="flex">
                            <span>&copy; {new Date().getFullYear()} Trinity Evangelical Lutheran Church, All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}

export default Footer
