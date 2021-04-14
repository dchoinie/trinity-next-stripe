import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/layout/Layout'

const Newsletter = (): JSX.Element => {
    return (
        <div className="bg-custom-blue py-6">
            <div className="flex justify-between max-w-screen-xl mx-auto">
                <div className="flex flex-col">
                    <h4 className="text-white leading-none">Subscribe</h4>
                    <h6 className="text-gray-400">To our newsletter for the latest news from Trinity Evangelical Lutheran Church</h6>
                </div>
                <div className="flex self-center">
                    <form action="https://trinitywaterville.us1.list-manage.com/subscribe/post" method="POST">
                        <input type="hidden" name="u" value="f63d0bb6003096c48a2ff3527" />
                        <div className="flex">
                            <input type="email" name="MERGE0" id="MERGE0" size={25} placeholder="email" className="p-2 rounded-tl rounded-bl" required />
                            <button type="submit" className="bg-custom-blue text-gray-200 p-2 rounded-tr rounded-br border border-white hover:bg-gray-200 hover:text-custom-blue">Sign Up</button>
                        </div>
                        <input type="hidden" name="id" value="0cff9ce894" />
                    </form>
                </div>
            </div>
        </div>
    )
}

const Map = (): JSX.Element => {
    return (
        <div className="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.3815367108705!2d-93.57619778461381!3d44.219802679105904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f68f8f70a98d7b%3A0x83825fb46d532837!2sTrinity%20Lutheran%20Church!5e0!3m2!1sen!2sus!4v1618195755454!5m2!1sen!2sus" width="100%" height="450" style={{ border: "0" }} allowFullScreen loading="lazy"></iframe>
        </div>
    )
}

const ContactForm = (): JSX.Element => {
    return (
        <form method="POST" action="">

        </form>
    )
}

const contact: NextPage = () => {
    return (
        <Layout>
            <div className="mt-24">
                <ContactForm />
                <Map />
                <Newsletter />
            </div>
        </Layout>
    )
}

export default contact
