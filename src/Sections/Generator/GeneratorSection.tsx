import React from 'react'
import './styles.css'

function GeneratorSection() {
    return (
        <section className='generator-section'>
            <div className='container'>
                <h2 className='generator-title'>Descubre tu ruta de aprendizaje personalizada</h2>
                <form action="" className='generator-form'>
                    <textarea className="generator-textarea" placeholder="Quiero crear experiencias de usuario atractivas en la web, escribir y crear contenido"></textarea>
                    <span style={{ display: 'none' }}></span>
                    <button className='generator-button'>
                        <span>Generar mi ruta</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default GeneratorSection
