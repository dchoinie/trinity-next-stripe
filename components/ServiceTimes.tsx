import React from 'react'
import { BiChurch, BiBible, BiCalendarStar, BiCalendarEvent } from 'react-icons/bi'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import Card1 from '../public/images/painting1.png'
import Card2 from '../public/images/painting2.png'
import Card3 from '../public/images/painting3.png'
import Button from './Button'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const ServiceTimes = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
           <div className="flex flex-col items-center py-24 h-full">
                <SectionHeading
                    title="Service Times"
                    subTitle="We invite you to join us and grow in the grace and knowledge of Jesus Christ our Savior."
                    icon={<BiCalendarEvent className="text-custom-blue text-4xl mb-2" />} 
                />
                <div className="flex w-full gap-12 text-gray-600 mb-24">
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
                            day1="Sundays"
                            day2="Wednesdays"
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
                            dates1="School Year"
                            months1="(Sep - May)"
                            time1="9:00am"
                            dates2="Summer Months"
                            months2="(Jun - Aug)"
                            day2="Family Bible Study"
                            time3="8:00am"
                            summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dignissimos distinctio accusamus a tempora repellat in minima itaque."
                        />
                    </div>
                    <div className="w-1/3">
                        <ServiceCard 
                            title="Special Services" 
                            icon={<BiCalendarStar className="text-2xl text-custom-blue" />}
                            image={Card3}
                            imageAlt='Special Services'
                            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, cum! Nihil corporis sequi earum quaerat voluptate. Est molestiae temporibus doloribus tenetur?"
                            otherSection="Additional opportunities to hear God’s Word and receive the Lord’s Supper are offered during the seasons of Advent and Lent. Please check our church calendar for the dates and times of these services."
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h5>Due to COVID19, Trinity Evangelical Lutheran Church is temporarily live streaming our Sunday services on YouTube. Click below to access our live streams.</h5>
                    <aside className="mb-2 text-gray-600 italic">*The live stream for the current Sunday will show up shortly prior to the start of the service. Try refreshing the page if you do not see it.*</aside>
                    <Link href="/services">
                        <a className="flex text-lg font-medium px-5 py-2 rounded shadow-md bg-custom-blue text-gray-200">
                            <span className="mr-2">Live Streams</span>
                            <FaYoutube className="self-center" />
                        </a>
                    </Link>
                </div>
           </div>
        </div>
    )
}

export default ServiceTimes