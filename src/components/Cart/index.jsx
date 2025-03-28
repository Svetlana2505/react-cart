import './style.scss';

import { CartTop } from 'components/CartTop';
import { CartProduct } from 'components/CartProduct';
import { CartBottom } from 'components/CartBottom';

import data from './../../data';
import { useEffect, useState } from 'react';

export const Cart = () => {
  const [cart, setCart] = useState(data);
  const [total, setTotal] = useState({
    price: cart.reduce((acc, el) => el.priceTotal + acc, 0),
    count: cart.reduce((acc, el) => el.count + acc, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((acc, el) => el.priceTotal + acc, 0),
      count: cart.reduce((acc, el) => el.count + acc, 0),
    });
  }, [cart]);

  const deleteButton = id => {
    setCart([...cart.filter(product => product.id !== id)]);
  };

  const increase = id => {
    setCart([
      ...cart.map(product =>
        product.id === id
          ? {
              ...product,
              count: (product.count += 1),
              priceTotal: product.count * product.price,
            }
          : { ...product }
      ),
    ]);
  };

  const decrease = id => {
    setCart([
      ...cart.map(product =>
        product.id === id
          ? {
              ...product,
              count: product.count - 1 > 1 ? product.count - 1 : 1,
              priceTotal:
                (product.count - 1 > 1 ? product.count - 1 : 1) * product.price,
            }
          : { ...product }
      ),
    ]);
  };

  const changeValue = (id, value) => {
    setCart([
      ...cart.map(product =>
        product.id === id
          ? {
              ...product,
              count: value,
              priceTotal: value * product.price,
            }
          : { ...product }
      ),
    ]);
  };
  return (
    <div className="cart">
      <CartTop />
      {cart &&
        cart.map(product => (
          <CartProduct
            product={product}
            key={product.id}
            deleteButton={deleteButton}
            increase={increase}
            decrease={decrease}
            changeValue={changeValue}
          />
        ))}

      <CartBottom total={total} />
    </div>
  );
};
