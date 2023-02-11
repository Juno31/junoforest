import React from 'react'

interface ButtonProps {
    className: string
    children: any
    onClick: () => void
}

const Button: React.FC<ButtonProps> = function({
    className,
    children, 
    onClick
}) {
    
    return (
        <button 
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button