import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <Image
                src="/images/IMG_9076.jpg"
                alt="Hero Image"
                layout="fill"
                quality="100"
            />
        </div>
    )
}

export default Hero
