import React from 'react'

interface ServiceCardProps {
    title: string;
    icon?: JSX.Element;
    image?: string;
    imageAlt?: string;
    dates1?: string;
    months1?: string;
    dates2?: string;
    months2?: string;
    time1?: string;
    time2?: string;
    time3?: string;
    summary?: string;
    day1?: string;
    day2?: string;
    otherSection?: string;
}

const ServiceCard = (props: ServiceCardProps) => {
    const { title, icon, image, imageAlt, dates1, dates2, time1, time2, time3, months1, months2, summary, day1, day2, otherSection } = props
    return (
        <div className="rounded shadow-lg border border-gray-100 h-full">
            <div className="flex flex-col h-full justify-between">
                <div>
                <img src={image} alt={imageAlt} className="w-full rounded-tl rounded-tr h-64" />
                    <div className="p-6">
                    <div className="flex flex-col items-center">
                            {icon ? <div className="mb-2">{icon}</div> : null}
                            <h2 className="text-xl text-gray-700 text-center">
                                {title}
                            </h2>
                    </div>
                    <hr className="my-2 w-1/2 mx-auto"/>
                    {dates1 ? (
                        <div className="grid grid-cols-2 gap-y-4">
                            <div className="flex flex-col items-center">
                                <span className="underline">{dates1}</span>
                                <span>{months1}</span>
                            </div>
                            <div className="flex flex-col self-center items-center">
                                <span className="underline">{day1}</span>
                                <span>{time1}</span>
                            </div>
                            <div className="flex flex-col self-center items-center">
                                <span className="underline">{dates2}</span>
                                <span>{months2}</span>
                            </div>
                            <div className="flex flex-col self-center items-center">
                                <span className="underline">{day1}</span>
                                <span>{time2}</span>
                                <span className="underline">{day2}</span>
                                <span>{time3}</span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {otherSection}
                        </div>
                    )}
                    </div>
                </div>
                <div>
                    <div className="flex bg-custom-blue text-gray-200 rounded-bl rounded-br h-36">
                        <div className="p-6 text-center self-center">
                            {summary}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
