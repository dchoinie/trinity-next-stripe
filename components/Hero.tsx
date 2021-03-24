import React from 'react'

const Hero = () => {
    return (
        <div className="hero">
            <div className="flex flex-col justify-center items-center w-full h-full" style={{ marginTop: "-123.2px"}}>
                <h1 className="font-bold text-6xl text-white" style={{ textShadow: "1px 1px 15px black"}}>
                    Trinity Evangelical Lutheran Church
                </h1>
                <h2 className="text-white tracking-wider text-3xl" style={{ textShadow: "1px 1px 15px black"}}>Waterville, MN</h2>
            </div>
        </div>
    )
}

export default Hero
