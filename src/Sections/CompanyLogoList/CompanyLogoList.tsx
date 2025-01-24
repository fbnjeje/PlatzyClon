 

import avianca from '../../assets/brands/avianca.svg'
import bancolombia from '../../assets/brands/bancolombia.svg'
import colsubsidio from '../../assets/brands/colsubsidio.svg'
import davivienda from '../../assets/brands/davivienda.svg'
import FundacionGrupoSocial from '../../assets/brands/FundacionGrupoSocial.svg'
import GrupoExito from '../../assets/brands/GrupoExito.svg'
import GrupoSura from '../../assets/brands/GrupoSura.svg'
import Lenovo from '../../assets/brands/Lenovo.svg'
import mapfre from '../../assets/brands/mapfre.svg'
import rappi from '../../assets/brands/rappi.svg'
import CardLoop from '../../components/CardLoop/CardLoop'
import './styles.css'


import { motion } from "framer-motion"

function CompanyLogoList() {
    const images = [
        avianca,
        bancolombia,
        colsubsidio,
        davivienda,
        FundacionGrupoSocial,
        GrupoExito,
        GrupoSura,
        Lenovo,
        mapfre,
        rappi
    ]
    return (
        <div>
            <article style={{ display: 'flex', overflow: 'hidden' }}>

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="Card-Loop"
                    style={{
                        display: 'flex',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        minWidth: 'max-content',
                    }}
                >
                    {[...images].map((image, index) => (
                        <CardLoop key={index} img={image} />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="Card-Loop"
                    style={{
                        display: 'flex',
                        flexShrink: 0,
                        whiteSpace: 'nowrap',
                        minWidth: 'max-content',
                    }}
                >
                    {[...images].map((image, index) => (
                        <CardLoop key={index} img={image} />
                    ))}
                </motion.div>

            </article>
        </div>
    )
}

export default CompanyLogoList
