import React from 'react'
import './styles.css'

interface BtnSecondaryProps {
    text: String
}
function BtnSecondary({ text }: BtnSecondaryProps) {
    return (
        <button className="button-secondary">
            <span>{text}</span>
        </button>
    )
}

export default BtnSecondary
