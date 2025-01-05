import React from 'react';
import './styles.css';
const Header = () => {
  return (
    <div className='header'>

      {/* logo */}
      <view >
        <p>Logo</p>
      </view>

      {/* nav */}
      <view>
        <nav>
          <ul className='nav'>
            <li>Explorar</li>
            <li>Comunidad</li>
            <li>Planes</li>
            <li>Empresas</li>
          </ul>
        </nav>
      </view>

      {/* button */}
      <view>
        <button>Acceder</button>
      </view>
    </div>
  );
}


export default Header;
