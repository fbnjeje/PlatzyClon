 
import './styles.css'


import img from '../../assets/lista/ytIcon.svg'
function PlatziItemCard() {
    return (
        <div className='PlatziItemCard-container'>
            <img src={img} alt=""  width={40} height={40}/>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    )
}

export default PlatziItemCard