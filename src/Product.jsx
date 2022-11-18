import './Product.css';

const Product = ({ id, title, image, price, rating }) => {

  // 출력
  return (
    <>
      <div className='product'>
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>가격</small>
            <strong>{price}</strong>
            <small>원</small>
          </p>
          <div className="product_rating">
            <p>★</p>
            <p>★</p>
            <p>★</p>
            <p>★</p>
          </div>
        </div>
        <img src={image} alt="" />
        <button>장바구니에 담기</button>
      </div>
    </>
  );

};

export default Product;;