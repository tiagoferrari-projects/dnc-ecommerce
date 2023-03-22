import './index.scss';
import dncLogo from '../../assets/logo-dnc.png';

const Header = () => {
  return (
    //Block
    <div className='header'>
      <img className='header__img' src={dncLogo} alt="dnc logo" />
    </div>
  )
}

export default Header;