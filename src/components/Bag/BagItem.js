import React, { Component } from 'react';

import MdClose from 'react-ionicons/lib/MdClose';
import MdAddCircle from 'react-ionicons/lib/MdAddCircle';
import MdRemoveCircle from 'react-ionicons/lib/MdRemoveCircle';

import { 
  BagItemWrapper, 
  BagItemTitle, 
  BagItemDetails,
  BagItemPrice
 } from '../../theme/BagItemStyles';


export default class BagItem extends Component {
  state = {
    fillColor: "#000000",
    deletedLine: '',
    itemOpacity: 1
  }

  mouseOver = () => {
    this.setState({ fillColor: '#ffffff' });
  }

  mouseLeave = () => {
    this.setState({ fillColor: '#000000' });
  }

  render() {
    const { item } = this.props;

    const itemTotalPrice = (item.price * item.quantity).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return (
        <BagItemWrapper className="row" deleted={ this.state.deletedLine } opacity={ this.state.itemOpacity }>

          <div className="col-2 col-md-1 p-0">
            <img src={ item.thumbUrl } alt=""/>
          </div>

          <div className="col-7 col-md-8 pr-0 align-items-start">
          <BagItemTitle>{item.title} {item.description}</BagItemTitle>
            <BagItemDetails>{ item.availableSizes[0] } | { item.style }</BagItemDetails>
            <BagItemDetails>
              <span>Quantidade: </span>

              <MdRemoveCircle fontSize="16px" color="#dfbd00"
                onClick={() => {
                  this.props.decreaseItem(item.id);
              }} />

              <span className="mx-1 text-white"> {item.quantity} </span>

              <MdAddCircle fontSize="16px" color="#dfbd00" 
                onClick={() => {
                  this.props.increaseItem(item.id);
              }}/>
            </BagItemDetails>
          </div>

          <div className="col-3 col-md-3 p-0 d-flex flex-column align-items-end">

          <button 
            onClick={() => {
              this.setState({ deletedLine: 'line-through', itemOpacity: 0 });
              setTimeout(() => {
                this.setState({ deletedLine: '', itemOpacity: 1 });
                this.props.removeFromBag(item.id);
              }, 500);
            }}
            onMouseOver={ this.mouseOver }
            onMouseLeave={ this.mouseLeave }>
            <MdClose fontSize="24px" color={ this.state.fillColor } />
          </button>

          <BagItemPrice>{ item.currencyFormat } { itemTotalPrice }</BagItemPrice>

          </div>
        </BagItemWrapper>
    )
  }
}
