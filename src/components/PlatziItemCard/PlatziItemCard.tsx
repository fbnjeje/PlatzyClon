 
import './styles.css'



interface PlatziItemCardProps {
    icon: string;
    label: string;
}

function PlatziItemCard({ icon, label }: PlatziItemCardProps) {
    return (
        <div className='PlatziItemCard-container'>
            <img src={icon} alt=""  width={40} height={40}/>
            <p>{label}</p>
        </div>
    )
}

export default PlatziItemCard