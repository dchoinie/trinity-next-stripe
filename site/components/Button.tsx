import React from 'react'
import cx from 'classnames'

interface ButtonProps {
    bg?: string;
    bgHover?: string;
    color?: string;
    colorHover?: string;
    extraClassNames?: string | Array<string>
    icon?: JSX.Element;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    withIcon?: boolean;
}

const Button = (props: ButtonProps): JSX.Element => {
    const { bg, bgHover, color, colorHover, extraClassNames, icon, label, onClick, withIcon } = props;
    return (
        <button className={cx(label, bg, bgHover, color, colorHover, extraClassNames, 'text-lg font-medium px-5 py-2 rounded shadow-md')} onClick={onClick}>
            {icon ? (
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
