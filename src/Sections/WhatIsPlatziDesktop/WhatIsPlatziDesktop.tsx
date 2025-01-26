 
import './styles.css'
import PlatziItemCard from '../../components/PlatziItemCard/PlatziItemCard'
function WhatIsPlatziDesktop() {
    return (
        <div className='WhatIsPlatziDesktop-container'>
            <div className='WhatIsPlatziDesktop-content-left'>
                <h2>
                    <span>Somos la autoridad</span>
                    en escalar la educacion
                    en linea en america latina
                </h2>
                <ul>
                    <li><PlatziItemCard /></li>
                    
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default WhatIsPlatziDesktop