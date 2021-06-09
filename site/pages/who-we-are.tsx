import React from 'react'
import Layout from '../components/layout/Layout'
import SectionHeading from '../components/SectionHeading'
import WhoWeAreImage from '../public/images/IMG_9098.jpg'

interface whoWeAreHeadingProps {
    title: string,
    desc: string,
}

const WhoWeAreHeading = (props: whoWeAreHeadingProps): JSX.Element => {
    const { title, desc } = props
    return (
        <div className="my-6">
            <div className="flex justify-between">
                <h4 className="self-center w-2/5 text-custom-blue">
                    {title}
                </h4>
                {/* <span className="self-center text-3xl w-1/5 flex justify-center"> - </span> */}
                <p className="self-center w-3/5">
                    {desc}
                </p>
            </div>
            <hr className="border-t border-gray-200 w-2/3" />
        </div>
    )
}

const whoWeAre = () => {
    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto my-24">
                <SectionHeading
                    title="Who We Are"
                    subTitle="Our church’s name says a lot about us"
                />
                <div className="flex gap-6">
                    <div className="flex flex-col w-1/2 self-center">
                        <WhoWeAreHeading
                            title="Trinity"
                            desc="We believe in and worship the God of the Bible: God the Father, Son, and Holy Spirit"
                        />
                        <WhoWeAreHeading
                            title="Evangelical"
                            desc="We keep Jesus and His Gospel of forgiveness, life, and salvation at our center"
                        />
                        <WhoWeAreHeading
                            title="Lutheran"
                            desc="Our faith and practice are guided by the Lutheran Confessions and are distinctly Lutheran"
                        />
                        <WhoWeAreHeading
                            title="Church"
                            desc="We are a congregation of The Lutheran Church-Missouri Synod and a part of the one holy Christian and apostolic Church"
                        />
                    </div>
                    <div className="flex w-1/2 self-start">
                        <img src={WhoWeAreImage} alt="Who We Are" className="rounded shadow" />
                    </div>
                </div>
                <div className="flex mt-24 gap-6">
                    <div>
                        <p>
                            Trinity Evangelical Lutheran Church has been proclaming the Gospel of the death and resurrection of Jesus to the people of Waterville and the surrounding communities since 1909. We are an imperfect group of sinners gathered around our shared confession of Jesus and His Gospel.
                        </p>
                    </div>
                    <span className="border-r border-gray-200 mx-4"></span>
                    <div>
                        <p>
                            We are formed and shaped by the Holy Scriptures. And we worship according to the historic liturgy of the Church. With the help of God, we intend to bear faithful witness to Jesus, to show His mercy to all, and to live our life together in His Church until He comes again in glory on the Last Day.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default whoWeAre