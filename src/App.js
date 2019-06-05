import React from 'react';

import { getAll } from './api/phone'

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter/>
              <Basket/>
            </div>

            <div className="col-md-10">
              <ul className="phones">
                { this.state.phones.map(phone => (
                  <li className="thumbnail">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Basket = () => {
  return (
    <section>
      <p>Shopping Cart</p>
      <ul>
        <li>Phone 1</li>
        <li>Phone 2</li>
        <li>Phone 3</li>
      </ul>
    </section>
  );
};

const Filter = () => {
  return (
    <section>
      <p>
        Search:
        <input />
      </p>

      <p>
        Sort by:
        <select>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    </section>
  );
}

export default App;
