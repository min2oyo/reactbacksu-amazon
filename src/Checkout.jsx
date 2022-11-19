import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {

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
            {/* 장바구니 아이템들 */}
            {/* 장바구니 아이템들 */}
            {/* 장바구니 아이템들 */}
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