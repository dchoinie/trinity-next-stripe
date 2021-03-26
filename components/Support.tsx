import React from 'react'
import { FaPrayingHands } from 'react-icons/fa'
import Button from './Button'

const Support = () => {
    return (
        <div className="bg-custom-blue py-20">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex w-full justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-5xl text-white font-bold capitalize">
                            Want to support Trinity?
                        </h2>
                        <div className="border-t-2 border-white my-2 w-1/3"/>
                        <h2 className="text-5xl text-gray-400 font-bold capitalize">
                            Make a donation today
                        </h2>
                    </div>
                    <div className="flex">
                        <Button
                            label="Donate"
                            bg="bg-white"
                            color="text-gray-700"
                            extraClassNames="self-center text-2xl"
                            icon={<FaPrayingHands />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
