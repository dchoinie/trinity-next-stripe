import React from 'react'
import { BiChurch, BiBible, BiCalendarStar, BiCalendarEvent } from 'react-icons/bi'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import Card1 from '../public/images/painting1.png'
import Card2 from '../public/images/painting2.png'
import Card3 from '../public/images/painting3.png'

const ServiceTimes = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
           <div className="flex flex-col items-center py-24 h-full">
                <SectionHeading
                    title="Service Times"
                    subTitle="We invite you to join us and grow in the grace and knowledge of Jesus Christ our Savior."
                    icon={<BiCalendarEvent className="text-custom-blue text-4xl mb-2" />} 
                />
                <div className="flex w-full gap-12 text-gray-600">
                    <div className="w-1/3">
                        <ServiceCard 
                            title="Divine Service" 
                            icon={<BiChurch className="text-2xl text-custom-blue" 
                            />}
                            image={Card1}
                            imageAlt='Divine Service'
                            dates1="School Year"
                            dates2="Summer Months"
                            time1="7:45am &amp; 10:00am"
                            time2="9:00am"
                            time3="7:00am"
                            months1="(Sep - May)"
                            months2="(Jun - Aug)"
                            summary="Holy Communion is celebrated at each of our Divine Services every Sunday, and on each Wednesday evening during the summer."
                        />
                    </div>
                    <div className="w-1/3">
                        <ServiceCard 
                            title="Adult Bible Class &amp; Sunday School" 
                            icon={<BiBible className="text-2xl text-custom-blue" 
                            />}
                            image={Card2}
                            imageAlt='Adult Bible Class &amp; Sunday School'
                        />
                    </div>
                    <div className="w-1/3">
                        <ServiceCard 
                            title="Special Services" 
                            icon={<BiCalendarStar className="text-2xl text-custom-blue" />}
                            image={Card3}
                            imageAlt='Special Services'
                        />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ServiceTimes
