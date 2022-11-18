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
            <Product
              id="2323"
              title="제품1입니다"
              price={3000}
              image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
              rating={5}
            />
          </div>
          <div className='home_row'>
            <Product />
            <Product />
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