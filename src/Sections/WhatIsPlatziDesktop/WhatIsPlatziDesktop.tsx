import './styles.css'
import PlatziItemCard from '../../components/PlatziItemCard/PlatziItemCard'

import Learn from '../../Utils/LearnNewList.tsx'

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
                    <li>
                        {
                            Learn.map((item) =>(
                                <PlatziItemCard icon={item.icon} label={item.label} />
                            ))
                        }
                    </li>
                    
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default WhatIsPlatziDesktop