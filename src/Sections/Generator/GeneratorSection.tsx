 
import './styles.css'
import BtnPrimary from '../../components/BtnPrimary/BtnPrimary'

function GeneratorSection() {
    return (
        <section className='generator-section'>
            <div className='container'>
                <h2 className='generator-title'>Descubre tu ruta de aprendizaje personalizada</h2>
                <form action="" className='generator-form'>
                    <textarea className="generator-textarea" placeholder="Quiero crear experiencias de usuario atractivas en la web, escribir y crear contenido"></textarea>
                    <span style={{ display: 'none' }}></span>
                    <BtnPrimary text='Generar ruta' />
                </form>
            </div>
        </section>
    )
}

export default GeneratorSection
