import React, { Component } from 'react';

import BagIcon from '../Bag/BagIcon';
import Subtotal from './Subtotal';

import { BagContainer, BagHeader } from '../../theme/BagStyles';
import MdClose from 'react-ionicons/lib/MdClose';

import BagItem from './BagItem';


export default class Bag extends Component {

  state = {
    bagTotalPrice: '',
    installmentsVal: '',
    fillColor: '#999999'
  }

  // Usando novo componente lifecicle pra trazer o valor total para a sacola
  static getDerivedStateFromProps(props) {
    const unitPrice = props.bagList;
    const totalPrice = Object.keys(unitPrice).reduce((total, key) => {
      const item = unitPrice[key];
      if(item) return total + (item.price * item.quantity);
      return total;
    }, 0);

    const installments = (totalPrice / 10).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,  
      maximumFractionDigits: 2
    });

    const toCurrency = totalPrice.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,  
      maximumFractionDigits: 2
    });
    
    return {
      bagTotalPrice: toCurrency,
      installmentsVal: installments
    };
  }

  mouseOver = () => {
    this.setState({ fillColor: '#ffffff' });
  }

  mouseLeave = () => {
    this.setState({ fillColor: '#999999' });
  }

  render() {
    // Verifica se o carrinho está vazio, se estiver, retorna uma mensagem
    let bagIsEmpty;
    if(this.state.bagTotalPrice === '0,00') {
      bagIsEmpty = 

      <div className="d-flex justify-content-center">
        <h4 className="py-5 d-block">Sua sacola está vazia!</h4>
      </div>

    } else {
      bagIsEmpty = <Subtotal bagTotalPrice={this.state.bagTotalPrice} installmentsVal={ this.state.installmentsVal } />
    }

    return (
      <BagContainer className="container">
          <BagHeader className="row m-0">
            <div className="col-2 col-md-2 p-0 d-flex justify-content-center align-items-center">
              <button
                onClick={() => {
                  this.props.hideBag();
                }}
                onMouseOver={this.mouseOver}
                onMouseLeave={this.mouseLeave}>
                <MdClose fontSize="32px" color={ this.state.fillColor }/>
              </button>
            </div>
            <div className="col-6 offset-1 col-md-6 offset-md-1 d-flex justify-content-around align-items-center">
              <BagIcon width={ 48 } bagList={ this.props.bagList } />
              <h1 className="mb-0 text-white">Sacola</h1>
            </div>
          </BagHeader>

          {
            Object.keys(this.props.bagList).map((key, index) => {
              const item = this.props.bagList[key];
              return (<BagItem key={ index } item={ item } index={ index } removeFromBag={ this.props.removeFromBag } increaseItem={ this.props.increaseItem } decreaseItem={ this.props.decreaseItem } />);
              }
            )
          }
          { bagIsEmpty }
      </BagContainer>
    );
  }
}
