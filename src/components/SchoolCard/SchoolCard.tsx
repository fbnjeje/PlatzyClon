 
import './styles.css'

interface SchoolCardProps {
    emblem: string;
    title: string;
    descripcion: string;
    figureBgColor: string;
    leftBlur: string;
}

function SchoolCard({ emblem, title, descripcion, figureBgColor, leftBlur }: SchoolCardProps) {
    return (
        <li className='SchoolCard' style={{ "--left-blur": leftBlur } as React.CSSProperties}>
            <a href="https://platzi.com/escuela/datos/">
                <figure style={{ "--figure-bg-color": figureBgColor } as React.CSSProperties}>
                    <img alt="Data Science e Inteligencia Artificial" loading="lazy" width="56" height="56" decoding="async" src={emblem} />
                </figure>
                <p>
                    <span>{title}</span>
                    <span>{descripcion}</span>
                </p>
                <div>

                    <svg width="1em" height="1em" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="evenodd" d="M7.891 6.225a.625.625 0 0 1 .884 0l3.333 3.333a.625.625 0 0 1 0 .884l-3.333 3.333a.625.625 0 1 1-.884-.884L10.783 10 7.89 7.109a.625.625 0 0 1 0-.884" clip-rule="evenodd"></path></svg>
                </div>
            </a>
        </li>
    )
}

export default SchoolCard
