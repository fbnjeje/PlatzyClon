import React from 'react'
import './styles.css'
function GeneratorSection() {
    return (
        <section className='generator-section'>
            <div className='container'>
                <h2 className='title'>Descubre tu ruta de aprendizaje personalizada</h2>
                <form action="">
                    <textarea className="LpGenerator_LpGeneratorTextarea__us1tE" placeholder="Quiero crear experiencias de usuario atractivas en la web, escribir y crear contenido"></textarea>
                    <span style={{ display: 'none' }}></span>
                    <button>Generar ruta</button>
                </form>
            </div>
        </section>
    )
}

export default GeneratorSection
