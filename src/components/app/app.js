import React, { Component } from 'react';

import { getAll, getById } from '../../api/phone';
import Basket from '../basket';
import Filter from '../filter';
import Catalog from '../catalog';
import Viewer from '../viewer';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
    };
  }

  onBack = () => {
    this.setState({
      selectedPhone: null,
    });
  };

  selectPhone = phoneId => {
    this.setState({
      selectedPhone: getById(phoneId),
    });
  };

  addToBasket = phoneId => {
    const index = this.state.basketItems.findIndex(({ id }) => id === phoneId);
    if (index === -1) {
      const newItem = { id: phoneId, quantity: 1 };
      this.setState(state => ({
        basketItems: [...state.basketItems, newItem],
      }));
    } else {
      const newItem = { ...this.state.basketItems[index] };
      newItem.quantity++;
      this.setState(state => ({
        basketItems: [...state.basketItems.slice(0, index), newItem, ...state.basketItems.slice(index + 1)],
      }));
    }
  };

  removeFromBasket = phoneId => {
    const index = this.state.basketItems.findIndex(({ id }) => id === phoneId);
    this.setState(state => ({
      basketItems: [...state.basketItems.slice(0, index), ...state.basketItems.slice(index + 1)],
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <Basket basketItems={this.state.basketItems} removeFromBasket={this.removeFromBasket} />
            </div>

            <div className="col-md-10">
              {this.state.selectedPhone ? (
                <Viewer phone={this.state.selectedPhone} onBack={this.onBack} addToBasket={this.addToBasket} />
              ) : (
                <Catalog phones={this.state.phones} onPhoneSelected={this.selectPhone} addToBasket={this.addToBasket} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
