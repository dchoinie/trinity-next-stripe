import React, { Component } from 'react'
import Layout from '../components/layout/Layout'
import SectionHeading from '../components/SectionHeading'

interface NameTitleProps {
    title: string;
    description: string;
}

const NameTitle = (props: NameTitleProps) => {
    const { title, description } = props;
    return (
        <div className="flex flex-col items-center mb-12">
            <h2 className="font-black uppercase tracking-wider text-7xl text-custom-blue">
                {title}
            </h2>
            <div className="flex border-l-2 border-custom-blue p-4">
                <p className="text-lg text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    )
}

const ourChurch = () => {
    return (
        <Layout title="Our Church | Trinity Evangelical Lutheran Church">
            <div className="mt-24 max-w-screen-xl mx-auto">
                <SectionHeading title="Our Church" subTitle="Our church’s name says a lot about us" />
                <NameTitle
                    title="Trinity"
                    description="We believe in and worship the God of the Bible: God the Father, Son, and Holy Spirit"
                />
                <NameTitle
                    title="Evangelical"
                    description="We keep Jesus and His Gospel of forgiveness, life, and salvation at our center"
                />
                <NameTitle
                    title="Lutheran"
                    description="Our faith and practice are guided by the Lutheran Confessions and are distinctly Lutheran"
                />
                <NameTitle
                    title="Church"
                    description="We are a congregation of The Lutheran Church-Missouri Synod and a part of the one holy Christian and apostolic Church"
                />
            </div>
        </Layout>
    )
}

export default ourChurch
