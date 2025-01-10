import React from 'react'
import './styles.css'
import SchoolCard from '../../components/Header/SchoolCard/SchoolCard'
import Classlist from '../../Utils/ClassList.tsx'

function SchoolList() {
    return (
        <div className='Hero'>
            {
                Classlist.map((item) => (
                    <SchoolCard emblem={item.logo} descripcion={item.description} title={item.title} figureBgColor={item.figureBgColor} leftBlur={item.leftBlur} />
                ))
            }
        </div>
    )
}

export default SchoolList
