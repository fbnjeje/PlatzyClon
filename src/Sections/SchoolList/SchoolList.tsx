import React from 'react'
import './styles.css'
import SchoolCard from '../../components/Header/SchoolCard/SchoolCard'
import Classlist from '../../Utils/ClassList.tsx'

function SchoolList() {
    return (
        <div className='separeitor'>
            <div className='Hero'>

                {
                    Classlist.map((item) => (
                        <SchoolCard emblem={item.logo} descripcion={item.description} title={item.title} figureBgColor={item.figureBgColor} leftBlur={item.leftBlur} />
                    ))
                }

            </div>
            <label>
                Ver todas las escuelas
                <div>

                    <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#C4C8CE" fill-rule="evenodd" d="M7.47 9.47a.75.75 0 0 1 1.06 0L12 12.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></path></svg>
                </div>
            </label>

        </div>
    )
}

export default SchoolList
