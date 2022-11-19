import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating }) => {

  // 출력
  return (
    <>
      <div className='CheckoutProduct'>
        <img className='checkoutProduct_image' src={image} alt='checkoutProduct_image' />
        <div className='checkoutProduct_info'>
          <p className='checkoutProduct_title'>
            {title}
          </p>
          <p className='checkoutProduct_price'>
            <small>￦</small>
            <small>{price}</small>
            <small>원</small>
          </p>
          <div className='checkoutProduct_rating'>
            {
              Array(rating)   // rating 크기만큼 배열[] 생성
                .fill()       // [undefind, undefind, undefind, undefind, undefind]
                .map(() => (  // 각 undefind에 채움
                  <p>★</p>
                ))
            }
          </div>
          <button>장바구니에서 제거하기</button>
        </div>
      </div>
    </>
  );

};

export default CheckoutProduct;