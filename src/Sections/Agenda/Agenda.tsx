import React from 'react'
import './styles.css'

import BtnSecondary from '../../components/BtnSecondary/BtnSecondary'
function Agenda() {
    return (
        <div className='agenda-container'>
            <h2 className='agenda-title'><span>Más de 3000 empresas</span> usan Platzi para la informacion de sus equipos</h2>
            <BtnSecondary text={"Agendar una demo"} />
        </div>
    )
}

export default Agenda
