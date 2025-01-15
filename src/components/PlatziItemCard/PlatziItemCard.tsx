import React from 'react'
import './styles.css'


import img from '../../assets/lista/download.svg'
function PlatziItemCard() {
    return (
        <div className='PlatziItemCard-container'>
            <img src={img} alt="" />
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    )
}

export default PlatziItemCard