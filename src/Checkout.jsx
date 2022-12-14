import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {

  // 변수
  const [{ basket }, dispatch] = useStateValue();

  // 출력
  return (
    <>
      <div className='checkout'>
        <div className='checkout_left'>
          <img className='checkout_ad'
            src='https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png'
            alt='checkout_ad'
          />
          <div>
            <h2 className='checkout_title'>
              장바구니입니다
            </h2>
            {basket.map(item => (
              <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
            ))}
          </div>
        </div>
        <div className='checkout_right'>
          <Subtotal />
        </div>
      </div>
    </>
  );

};

export default Checkout;;;