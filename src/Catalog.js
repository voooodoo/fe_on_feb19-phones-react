import React from 'react';

const Catalog = (props) => (
  <ul className="phones">

    { props.phones.map(phone => (
      <li className="thumbnail" key={phone.id} >
        <a href={'#' + phone.id} className="thumb">
          <img
            alt={phone.name}
            src={phone.imageUrl}
          />
        </a>

        <div className="phones__btn-buy-wrapper">
          <a className="btn btn-success">
            Add
          </a>
        </div>

        <a href={'#' + phone.id}>{phone.name}</a>
        <p>{phone.snippet}</p>
      </li>
    )) }
  </ul>
);

export default Catalog;
