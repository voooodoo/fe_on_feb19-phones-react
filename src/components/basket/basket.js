import React from 'react';

const Basket = props => {
  const { basketItems, removeFromBasket } = props;
  return (
    <section>
      <p>Shopping Cart</p>
      <ul>
        {basketItems.map(item => {
          const { id, quantity } = item;
          return (
            <li key={id}>
              {id} <span>{quantity}</span>
              <button onClick={() => removeFromBasket(id)}>x</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Basket;
