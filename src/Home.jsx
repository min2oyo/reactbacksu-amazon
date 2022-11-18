import './Home.css';
import Product from './Product';

const Home = () => {

  // 출력
  return (
    <>
      <div className='home'>
        <div className='home_container'>
          <img className='home_image' src='https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg' alt='home_image' />
          <div className='home_row'>
            <Product />
          </div>
          <div className='home_row'>
            <Product />
          </div>
          <div className='home_row'>
            <Product />
          </div>
        </div>
      </div>
    </>
  );

};

export default Home;