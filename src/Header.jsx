import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {

  // 변수
  const [{ basket }, dispatch] = useStateValue();

  // 출력
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
        </Link>
        <div className='header_search'>
          <input type='text' className='header_searchInput' />
          <SearchIcon className='header_searchIcon' />
        </div>
        <div className='header_nav'>
          <div className='header_option'>
            <span className='header_optionLineOne'>안녕하세요!</span>
            <span className='header_optionLineTwo'>로그인</span>
          </div>
          <div className='header_option'>
            <span className='header_optionLineOne'>돌아가기</span>
            <span className='header_optionLineTwo'>주문내역</span>
          </div>
          <div className='header_option'>
            <span className='header_optionLineOne'>반가워요</span>
            <span className='header_optionLineTwo'>구독과 좋아요</span>
          </div>
          <Link to='/checkout'>
            <div className='header_optionBasket'>
              <ShoppingBasket />
              <span className='header_optionLineTwoheader_basketCount'>
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );

};

export default Header;