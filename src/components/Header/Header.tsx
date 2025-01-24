 ;
import './styles.css';
// fixed
import Icon from '../../assets/platzi.svg';
import arrowDown from '../../assets/arrow-Down.svg';
const Header = () => {
  return (
    <div className='header'>

      {/* logo */}
      <view >

        <img src={Icon} width="91" height="31" className='pointer'></img>
      </view>

      {/* nav */}
      <view>
        <nav>
          <ul className='header-nav'>

            {/* items */}
            <li className='header-explorar pointer'>Explorar</li>
            <li className='header-explorar pointer'>Comunidad <img src={arrowDown} width="15" height="15"></img></li>
            <li className='pointer'>Planes</li>
            <li className='pointer'>Empresas</li>
          </ul>
        </nav>
      </view>

      {/* button */}
      <view>
        <button className='header-button pointer'>Acceder</button>
      </view>
    </div>
  );
}


export default Header;
