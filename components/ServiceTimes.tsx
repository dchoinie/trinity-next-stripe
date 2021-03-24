import React from 'react'
import { BiChurch, BiBible, BiCalendarStar, BiCalendarEvent } from 'react-icons/bi'

const ServiceTimes = () => {
    return (
        <div className="max-w-screen-xl mx-auto h-screen">
           <div className="flex flex-col items-center py-24 h-full">
                <BiCalendarEvent className="text-red-900 text-4xl mb-2" />
                <h2 className="text-3xl text-gray-800 mb-2">Service Schedule</h2>
                <h5 className="text-gray-500 text-base italic mb-12">
                    We invite you to join us and grow in the grace and knowledge of Jesus Christ our Savior.
                </h5>
                <div className="flex w-full justify-between">
                    <div className="flex flex-col p-6 rounded shadow-md w-1/3 border border-gray-100">
                        <div className="flex flex-col items-center text-2xl">
                            <BiChurch className="text-red-900 self-center mr-2" />
                            <h4>Divine Service</h4>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full mb-6">
                            <div className="flex flex-col items-center mr-4 w-1/2 text-center">
                                <p className="flex flex-col font-bold">
                                    <span>School Year</span>
                                    <span>(September - May)</span>
                                </p>
                                <p>7:45am &amp; 10:00am</p>
                            </div>
                            <div className="flex flex-col items-center ml-4 w-1/2 text-center">
                                <p className="flex flex-col font-bold">
                                    <span>Summer Months</span>
                                    <span>(June - August)</span>
                                </p>
                                <p>9:00am</p>
                            </div>
                        </div>
                        <div className="flex">
                            <p>
                                Holy Communion is celebrated at each of our Divine Services every Sunday, and on each Wednesday evening during the summer.
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ServiceTimes
