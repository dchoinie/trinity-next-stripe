import React from 'react'
import cx from 'classnames'

interface SectionHeadingProps {
    icon?: JSX.Element;
    subTitle?: string;
    title: string;
}

const SectionHeading = (props: SectionHeadingProps) => {
    const { icon, subTitle, title } = props;
    return (
        <div className="flex flex-col items-center">
            {icon ? icon : null}
            <h2 className={cx("text-3xl text-gray-800", subTitle ? "mb-2" : "mb-12")}>
                {title}
            </h2>
            {subTitle && (
                <h5 className="text-gray-500 text-base italic mb-12">
                    {subTitle}
                </h5>
            )}
        </div>
    )
}

export default SectionHeading