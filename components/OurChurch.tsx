import React from 'react'
import { FaChurch } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Trinity from '../public/images/IMG_9899.jpg'
import Link from 'next/link'

const OurChurch = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center py-24 h-full">
                <FaChurch className="text-red-900 text-4xl mb-2" />
                <h2 className="text-3xl text-gray-800 mb-2">Welcome to Trinity Evangelical Lutheran Church</h2>
                <h5 className="text-gray-500 text-base italic mb-12">
                    Through Him we are called out of darkness into God’s marvelous light.
                </h5>
                <div className="flex">
                    <div className="flex flex-col w-1/2 self-center p-6">
                        <p className="mb-2"><span className="text-red-900 text-xl">Trinity Evangelical Lutheran Church</span> is a congregation gathered by the Holy Spirit around our Lord’s saving Word and Sacraments. At the center of our life together is Jesus Christ, the Lamb of God who takes away the sin of the world.</p>
                        <p className="mb-2">We joyfully believe, teach, and confess the one true faith as it is revealed by the Triune God in Holy Scripture and faithfully confessed in the Book of Concord. Our mission is to serve the surrounding community with the saving Gospel of our Lord Jesus Christ. To accomplish this, we are committed to:</p>
                        <ul className="list-disc list-inside ml-12 mb-2 text-gray-800">
                            <li>the pure preaching of God’s holy Word</li>
                            <li>the right administration of Christ’s holy Sacraments</li>
                            <li>the faithful teaching of the Christian faith</li>
                            <li>the reverent, liturgical worship of the evangelical Lutheran Church</li>
                        </ul>
                        <p className="mb-6">We invite you to join us and grow in the grace and knowledge of Jesus Christ our Savior. Through Him we are called out of darkness into God’s marvelous light.</p>
                       <div className="flex">
                            <Link href="/our-church">
                                <a className="flex text-lg border-b border-red-900 text-gray-800">
                                    <span className="mr-2">Our Church</span>
                                    <HiOutlineArrowNarrowRight className="self-center text-red-900" />
                                </a>
                            </Link>
                       </div>
                    </div>
                    <div className="flex w-1/2 p-6">
                        <img src={Trinity} alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurChurch
