import React, { Component } from 'react'
import Layout from '../components/layout/Layout'
import SectionHeading from '../components/SectionHeading'

const ourChurch = () => {
    return (
        <Layout title="Our Church | Trinity Evangelical Lutheran Church">
            <div className="mt-24 max-w-screen-xl mx-auto">
                <SectionHeading title="Our Church" subTitle="Our church’s name says a lot about us" />
            </div>
        </Layout>
    )
}

export default ourChurch
