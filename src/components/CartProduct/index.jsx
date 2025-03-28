import './style.scss';

import formatPrice from './../../utils/priceFormatter';

export const CartProduct = ({
  product: { id, img, title, priceTotal, count },
  deleteButton,
  increase,
  decrease,
  changeValue,
}) => {
  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src={`./img/${img}`} alt="" />
      </div>
      <div className="cart-product__title">{title}</div>
      <div className="count">
        <div className="count__box">
          <input
            className="count__input"
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={e => changeValue(id, Number(e.target.value))}
          />
        </div>
        <div className="count__cursor">
          <button className="count__top" onClick={() => increase(id)}>
            <img src="./img/icons/top.svg" alt="top" />
          </button>

          <button className="count__down" onClick={() => decrease(id)}>
            <img src="./img/icons/down.svg" alt="down" />
          </button>
        </div>
      </div>

      <div className="cart-product__price">{formatPrice(priceTotal)} руб.</div>
      <div className="cart-product__button">
        <button type="button" onClick={() => deleteButton(id)}>
          <img src="./img/icons/delete.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
