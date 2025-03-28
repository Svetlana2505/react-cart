import './style.scss';
import formatPrice from './../../utils/priceFormatter';

export const CartBottom = ({ total: { price, count } }) => {
  return (
    <div className="cart-bottom">
      <div className="cart-bottom__count">{count} единицы</div>
      <div className="cart-bottom__price">{formatPrice(price)} руб.</div>
    </div>
  );
};
