import './styles.css'
import PlatziItemCard from '../../components/PlatziItemCard/PlatziItemCard'

import Learn from '../../Utils/LearnNewList.tsx'

import testImg from '../../assets/listImgs/1_aprendealgo_2e55c5a545.png'

function WhatIsPlatziDesktop() {
    return (
        <div className='WhatIsPlatziDesktop-container'>
            <div className='WhatIsPlatziDesktop-content-left'>
                <h2 className='title'>
                    <span>Somos la autoridad </span>
                    en escalar la educacion
                    en linea en america latina
                </h2>
                <ul>
                        {
                            Learn.map((item) =>(
                                <PlatziItemCard icon={item.icon} label={item.label} />
                            ))
                        }
                </ul>
            </div>

            <div className='WhatIsPlatziDesktop-content-right'>
                <figure>
                    <img className='img' src={testImg} alt='Platzi Desktop'  />
                </figure>
            </div>
        </div>
    )
}

export default WhatIsPlatziDesktop