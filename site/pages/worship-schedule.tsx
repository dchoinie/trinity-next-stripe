import React from 'react'
import Layout from '../components/layout/Layout'
import SectionHeading from '../components/SectionHeading'

const worshipSchedule = () => {
    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto my-24">
                <SectionHeading
                    title="Worship Schedule"
                    subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing."
                />
                <div className="flex flex-col items-center mb-6">
                    <h5>September - May</h5>
                    <p className="text-gray-500">(School Year)</p>
                </div>
                <div className="grid grid-cols-3 place-items-center w-1/2 mx-auto">
                    <p className="underline font-bold mb-2">Event</p>
                    <p className="underline font-bold mb-2">Day</p>
                    <p className="underline font-bold mb-2">Time</p>
                    <p>Divine Service</p>
                    <p>Sundays</p>
                    <p>7:45am &amp; 10:00am</p>
                    <hr className="col-span-3 border-t border-gray-200 w-full my-2" />
                    <p>Sunday School</p>
                    <p>Sundays</p>
                    <p>9:00am</p>
                    <hr className="col-span-3 border-t border-gray-200 w-full my-2" />
                    <p>Adult Bible Study</p>
                    <p>Sundays</p>
                    <p>9:00am</p>
                </div>
                <div className="flex flex-col items-center my-6">
                    <h5>June - August</h5>
                    <p className="text-gray-500">(Summer Months)</p>
                </div>
                <div className="grid grid-cols-3 place-items-center w-1/2 mx-auto">
                    <p className="underline font-bold mb-2">Event</p>
                    <p className="underline font-bold mb-2">Day</p>
                    <p className="underline font-bold mb-2">Time</p>
                    <p>Divine Service</p>
                    <p>Sundays</p>
                    <p>9:00am</p>
                    <hr className="col-span-3 border-t border-gray-200 w-full my-2" />
                    <p>Divine Service</p>
                    <p>Wednesdays</p>
                    <p>7:00pm</p>
                    <hr className="col-span-3 border-t border-gray-200 w-full my-2" />
                    <p>Family Bible Study</p>
                    <p>Sundays</p>
                    <p>8:00am</p>
                </div>
            </div>
        </Layout>
    )
}

export default worshipSchedule
