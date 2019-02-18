import React, { Component } from 'react';

import SizeSelector from './SizeSelector';

import { 
  Item, 
  Title,
  Divisor,
  Currency, 
  ItemPrice, 
  ItemInstallments, 
  BuyButton } from '../../theme/ProductStyles';

export default class Product extends Component {

  render() {
    const { product, index } = this.props;

    const priceFormated = product.price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,  
      maximumFractionDigits: 2
    });

    const installmentPrice = (product.price / product.installments).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    // Se o produto não possui numero de parcelas, não exibe na lista
    let showInstallments;
    if(product.installments === 0) {
      showInstallments = '';
    } else {
      showInstallments = <ItemInstallments>ou {product.installments} x {installmentPrice}</ItemInstallments>;
    }

    return (
      <div className="col-md-4 mb-5" key={ product.id }>
        <Item>
          <img src={ product.imgUrl } alt="{ product.title }" />
          <Title fontSize={14}>{ product.title } { product.description }</Title>

            <SizeSelector product={ product }/>

          <Divisor>___</Divisor>
          <p className="mb-0">
            <Currency>{ product.currencyFormat }</Currency> <ItemPrice>{ priceFormated }</ItemPrice>
          </p>
          { showInstallments }
          <BuyButton
            onClick={() => {
              this.props.addToBag(index)
            }}>comprar</BuyButton>
        </Item>
      </div>
    );
  }
}