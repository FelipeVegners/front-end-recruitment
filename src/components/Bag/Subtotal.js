import React, { Component } from 'react';

import { SubtotalWrapper, TotalPrice, InstallmentsPrice } from '../../theme/SubtotalStyles';
import { BuyButton } from '../../theme/ProductStyles';

export default class Subtotal extends Component {
  render() {
    return (
      <SubtotalWrapper className="row m-0">
        <div className="col-md-6 p-0 d-flex flex-row align-items-center">
          <p className="mb-0">Subtotal</p>
        </div>
        <div className="col-md-6 p-0 d-flex flex-column align-items-end">
          <TotalPrice>R$ { this.props.bagTotalPrice }</TotalPrice>
          <InstallmentsPrice>ou em até 10x de R$ { this.props.installmentsVal }</InstallmentsPrice>
        </div>
        <BuyButton secondary>comprar</BuyButton>
      </SubtotalWrapper>
      );
  }
}
