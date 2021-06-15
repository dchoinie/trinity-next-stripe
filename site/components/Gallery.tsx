import React from 'react'
import SectionHeading from './SectionHeading'
import Gallery1 from '../public/images/gallery1.jpg'
import Gallery2 from '../public/images/gallery2.jpg'
import Gallery3 from '../public/images/gallery3.jpg'
import Link from 'next/link'
import {FaCaretRight} from 'react-icons/fa'

const Gallery = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-24">
            <SectionHeading
                title="Gallery"
                subTitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem."
            />
            <div className="grid grid-cols-3 place-items-center gap-12 mb-12">
                <img src={Gallery1} className="homepageGalleryImg rounded shadow" alt="gallery1" />
                <img src={Gallery3} className="homepageGalleryImg rounded shadow" alt="gallery1" />
                <img src={Gallery2} className="homepageGalleryImg rounded shadow" alt="gallery1" />
            </div>
            <div className="flex justify-center">
                <Link href="/gallery">
                    <a className="flex text-lg font-medium px-5 py-2 rounded shadow-md bg-custom-blue text-gray-200">
                        <span>View More</span>
                        <FaCaretRight className="ml-2 self-center" />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Gallery