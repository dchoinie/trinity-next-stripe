import React from 'react'
import cx from 'classnames'

interface ButtonProps {
    label: string;
    bg?: string;
    bgHover?: string;
    color?: string;
    colorHover?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    extraClassNames?: string | Array<string>
    withIcon?: boolean;
    icon?: JSX.Element;
}

const Button = (props: ButtonProps): JSX.Element => {
    const { label, bg, bgHover, color, colorHover, onClick, extraClassNames, withIcon, icon } = props;
    return (
        <button className={cx(label, bg, bgHover, color, colorHover, extraClassNames, 'text-lg font-medium px-5 py-2 rounded shadow-md')} onClick={onClick}>
            {withIcon ? (
                <div className="flex items-center">
                    <span className="mr-2">
                        {label}
                    </span>
                   <span className="self-center">
                        {icon}
                   </span>
                </div>
            ) : label}
        </button>
    )
}

export default Button
