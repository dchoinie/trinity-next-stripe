import React from 'react'
import SectionHeading from './SectionHeading'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Gallery1 from '../public/images/mainGallery/gallery1.jpg'
import Gallery2 from '../public/images/mainGallery/gallery2.jpg'
import Gallery3 from '../public/images/mainGallery/gallery3.jpg'
import Gallery4 from '../public/images/mainGallery/gallery4.jpg'
import Gallery5 from '../public/images/mainGallery/gallery5.jpg'
import Gallery6 from '../public/images/mainGallery/gallery6.jpg'
import Gallery7 from '../public/images/mainGallery/gallery7.jpg'
import Gallery8 from '../public/images/mainGallery/gallery8.jpg'
import Gallery9 from '../public/images/mainGallery/gallery9.jpg'
import Gallery10 from '../public/images/mainGallery/gallery10.jpg'
import Gallery11 from '../public/images/mainGallery/gallery11.jpg'
import Gallery12 from '../public/images/mainGallery/gallery12.jpg'
import Gallery13 from '../public/images/mainGallery/gallery13.jpg'
import Gallery14 from '../public/images/mainGallery/gallery14.jpg'
import Gallery15 from '../public/images/mainGallery/gallery15.jpg'
import Link from 'next/link'
import { FaCaretRight } from 'react-icons/fa'

const CarouselComponent = () => {
    return (
        <Carousel autoPlay showArrows={true} infiniteLoop centerMode centerSlidePercentage={50} showThumbs={false} showStatus={false}>
            <div>
                <img src={Gallery1} alt="gallery 1" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery2} alt="gallery 2" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery3} alt="gallery 3" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery4} alt="gallery 4" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery5} alt="gallery 5" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery6} alt="gallery 6" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery7} alt="gallery 7" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery8} alt="gallery 8" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery9} alt="gallery 9" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery10} alt="gallery 10" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery11} alt="gallery 11" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery12} alt="gallery 12" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery13} alt="gallery 13" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery14} alt="gallery 14" style={{ height: "550px" }} />
            </div>
            <div>
                <img src={Gallery15} alt="gallery 15" style={{ height: "550px" }} />
            </div>
        </Carousel>
    )
}

const Gallery = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-24">
            <SectionHeading
                title="Gallery"
                subTitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem."
            />
            <div className="mb-12">
                <CarouselComponent />
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