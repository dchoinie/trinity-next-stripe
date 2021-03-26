import React from 'react'

interface SectionHeadingProps {
    icon?: JSX.Element;
    subTitle: string;
    title: string;
}

const SectionHeading = (props: SectionHeadingProps) => {
    const { icon, subTitle, title } = props;
    return (
        <div className="flex flex-col items-center">
            {icon ? icon : null}
            <h2 className="text-3xl text-gray-800 mb-2">
                {title}
            </h2>
            <h5 className="text-gray-500 text-base italic mb-12">
                {subTitle}
            </h5>
        </div>
    )
}

export default SectionHeading