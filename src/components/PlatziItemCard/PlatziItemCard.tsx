 
import './styles.css'


import img from '../../assets/lista/ytIcon.svg'
function PlatziItemCard() {
    return (
        <div className='PlatziItemCard-container'>
            <img src={img} alt=""  width={40} height={40}/>
            <p>Aprende algo nuevo cada minuto</p>
        </div>
    )
}

export default PlatziItemCard