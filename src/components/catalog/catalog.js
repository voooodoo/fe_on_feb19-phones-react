import React from 'react';

const Catalog = props => {
  const { phones, addToBasket } = props;
  return (
    <ul className="phones">
      {phones.map(phone => (
        <li className="thumbnail" key={phone.id}>
          <a
            href={'#' + phone.id}
            className="thumb"
            onClick={() => {
              props.onPhoneSelected(phone.id);
            }}
          >
            <img alt={phone.name} src={phone.imageUrl} />
          </a>

          <div className="phones__btn-buy-wrapper">
            <button
              className="btn btn-success"
              onClick={() => {
                addToBasket(phone.id);
              }}
            >
              Add
            </button>
          </div>

          <a
            href={'#' + phone.id}
            onClick={() => {
              props.onPhoneSelected(phone.id);
            }}
          >
            {phone.name}
          </a>

          <p>{phone.snippet}</p>
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
