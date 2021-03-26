import React from 'react'

interface ServiceCardProps {
    title: string;
    icon?: JSX.Element;
    image?: string;
    imageAlt?: string;
    dates1?: string;
    months1: string;
    dates2?: string;
    months2?: string;
    time1?: string;
    time2?: string;
    time3?: string;
    summary?: string;
}

const ServiceCard = (props: ServiceCardProps) => {
    const { title, icon, image, imageAlt, dates1, dates2, time1, time2, time3, months1, months2, summary } = props
    return (
        <div className="rounded shadow-lg border border-gray-100">
            <img src={image} alt={imageAlt} className="w-full rounded-tl rounded-tr h-64" />
            <div className="p-6">
               <div className="flex flex-col items-center">
                    {icon ? <div className="mb-2">{icon}</div> : null}
                    <h2 className="text-xl text-gray-700 text-center">
                        {title}
                    </h2>
               </div>
               <hr className="my-2 w-1/2 mx-auto"/>
               {dates1 && (
                <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex flex-col items-center">
                        <span>{dates1}</span>
                        <span>{months1}</span>
                    </div>
                    <div className="flex flex-col self-center items-center">
                        <span className="italic">Sundays</span>
                        <span>{time1}</span>
                    </div>
                    <div className="flex flex-col self-center items-center">
                        <span>{dates2}</span>
                        <span>{months2}</span>
                    </div>
                    <div className="flex flex-col self-center items-center">
                        <span className="italic">Sundays</span>
                        <span>{time2}</span>
                        <span className="italic">Wednesdays</span>
                        <span>{time3}</span>
                    </div>
                </div>
               )}
           </div>
            <div className="bg-custom-blue text-gray-200 rounded-bl rounded-br">
                <div className="p-6 text-center">
                    {summary}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
