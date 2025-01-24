 
import './styles.css'

import Search from '../../assets/search.svg'
function Home() {
    return (
        <section className='heroSection'>
            <h1 className='title'>La Escuela de Tecnología <br /><span>de Latinoameríca</span></h1>
            <p className='description'>
                Más de 5 millones de estudiantes y más de 3.000 empresas aprenden en Platzi
            </p>
            <article className='coursesSearch'>
                <label className='searchLabel'>¿Qué quieres aprender?</label>
                <input type="text" placeholder='holi' maxLength={512} className='inputAutocomplete' />
                <button className='searchIconBtn'>
                    <img src={Search} alt="" />
                </button>
            </article>
            <h6 className='freeCourses'>
                Empieza cualquier curso sin costo.
                <br />
                O consigue
                <a href=""> Platzi para tu empresa</a>
            </h6>
        </section>
    )
}

export default Home
