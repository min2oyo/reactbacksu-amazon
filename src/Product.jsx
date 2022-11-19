import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {

  // 변수
  const [{ basket }, dispatch] = useStateValue(); // 장바구니 [가져올 것, 쏠 것]

  // 함수
  const addToBasket = () => { // 장바구니 담기
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      }
    });
  };

  // 확인
  console.log(`장바구니: `, basket);

  // 출력
  return (
    <>
      <div className='product'>
        <div className='product_info'>
          <p>{title}</p>
          <p className='product_price'>
            <small>가격</small>
            <strong>{price}</strong>
            <small>원</small>
          </p>
          <div className='product_rating'>
            {
              Array(rating)   // rating 크기만큼 배열[] 생성
                .fill()       // [undefind, undefind, undefind, undefind, undefind]
                .map(() => (  // 각 undefind에 채움
                  <p>★</p>
                ))
            }
          </div>
        </div>
        <img src={image} alt='' />
        <button onClick={addToBasket}>장바구니에 담기</button>
      </div>
    </>
  );

};

export default Product;;