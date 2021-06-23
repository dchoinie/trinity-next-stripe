import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Layout from '../components/layout/Layout'
import SectionHeading from '../components/SectionHeading'
import Pastor from '../public/images/pastorMumme.jpg';

interface StaffCardProps {
    img?: string;
    name?: string;
    title?: string;
    desc?: string;
    phone?: string;
    email?: string;
}

const StaffCard = (props: StaffCardProps) => {
    const { img, name, title, desc, phone, email } = props;
    return (
        <div className="flex flex-col">
            <img src={img} alt="Pastor Mumme" className="h-64 w-auto rounded shadow self-center relative mb-6" />
            <div className="border-t-4 border-custom-blue -mt-32 mb-32 pt-32 bg-white w-96 shadow-md rounded px-6 pb-6">
                <div className="flex flex-col">
                    <h6 className="self-center">
                        {name}
                    </h6>
                    <p className="text-gray-500 self-center mb-6">
                        {title}
                    </p>
                    <p className="mb-6">
                        {desc}
                    </p>
                    <a href="tel:15073624454" className="mb-6 flex justify-center self-center">
                        <FaPhone className="self-center mr-2" />
                        (507) 362-4454
                    </a>
                    <a href="mailto:pastormumme@gmail.com" className="mb-6 flex justify-center self-center">
                        <FaEnvelope className="self-center mr-2" />
                        pastormumme@gmail.com
                    </a>
                    <h6 className="self-center">
                        Office Hours
                    </h6>
                    <p className="self-center text-center">
                        Tuesday - Saturday, 8:30 - 4:30 and by appointment
                    </p>
                </div>
            </div>
        </div>
    )
}

const ourStaff = () => {
    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto my-24">
                <SectionHeading
                    title="Meet Our Staff"
                    subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <div className="grid grid-flow-col auto-cols-max gap-12 justify-center">
                    <StaffCard
                        img={Pastor}
                        name="Rev. David C. Mumme"
                        title="Pastor"
                        desc="Pastor Mumme is originally from rural St. James, Minnesota. He earned his bachelor of arts degree at Concordia University, River Forest, Illinois in 1993. From there he entered Concordia Theological Seminary in Fort Wayne, Indiana to study for the Office of the Holy Ministry. Graduating in 1997, Pastor Mumme received his first call to serve Trinity Lutheran Church in Marseilles, Illinois. In February of 2003, he accepted the call to serve as the eighth pastor of Trinity Evangelical Lutheran Church in Waterville. Pastor Mumme and his wife Glenda have been blessed with five children."
                    />
                </div>
            </div>
        </Layout>
    )
}

export default ourStaff