import Link from 'next/link'
import React from 'react'
import { FaPrayingHands } from 'react-icons/fa'
import Button from './Button'

const Support = () => {
    return (
        <div className="stainedGlass h-screen flex">
            <div className="self-center w-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex w-full justify-between py-12">
                        <div className="flex flex-col">
                            <h2 className="text-5xl text-white font-bold capitalize">
                                Want to support Trinity?
                            </h2>
                            <div className="border-t-2 border-white my-2 w-1/3"/>
                            <h2 className="text-5xl text-custom-blue font-bold capitalize">
                                Make a donation today
                            </h2>
                        </div>
                        <div className="flex self-center">
                            <Link href="/donate">
                                <a>
                                    <Button
                                        label="Donate"
                                        bg="bg-white"
                                        color="text-gray-700"
                                        extraClassNames="self-center text-2xl shadow-md"
                                        icon={<FaPrayingHands />}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
