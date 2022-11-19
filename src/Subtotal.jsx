import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

const Subtotal = () => {

  // 변수
  const [{ basket }, dispatch] = useStateValue();
  // console.log(`basket`, basket);
  // console.log(`getBasketTotal`, getBasketTotal(basket));

  // 출력
  return (
    <>
      <div className='subtotal'>
        <CurrencyFormat
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={'￦'}
          renderText={value => (
            <>
              <p>
                총액 ( {basket?.length} items) : <strong>{value}원</strong>
              </p>
              <small className='subtotal_gift'>
                <input type='checkbox' />체크박스입니다
              </small>
            </>
          )}
        />
        <button>결제하기</button>
      </div>
    </>
  );

};

export default Subtotal;