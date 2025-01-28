 
import './styles.css'
interface PlatziItemCardProps {
    icon: string;
    label: string;
}

function PlatziItemCard({ icon, label }: PlatziItemCardProps) {
    return (
        <li className='PlatziItemCard-container'>
            <img src={icon} alt=""  width={40} height={40}/>
            <p>{label}</p>
        </li>
    )
}

export default PlatziItemCard