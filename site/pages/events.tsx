import React from 'react'
import Layout from '../components/layout/Layout'
import SectionHeading from '../components/SectionHeading'

const events = () => {
    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto my-24">
                <SectionHeading title="Events" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <div>
                    <iframe src="https://calendar.google.com/calendar/embed?src=ihfb8203lkp31n7038imqlpap8%40group.calendar.google.com&ctz=America%2FChicago" style={{border: "0", width: "100%", height: "90vh"}} frameBorder={0}></iframe>
                </div>
            </div>
        </Layout>
    )
}

export default events