import React, { Component } from 'react';

import { BagIconWrapper, BagIconImg, ItemsOnBag } from '../../theme/BagIconStyles';

import Icon from '../../assets/icon-bag.svg';

export default class BagIcon extends Component {

  render() {

    const bagList = this.props.bagList;
    const itemsOnBag = Object.keys(bagList).reduce((total, key) => {
      const item = bagList[key];
      if (item) return total + item.quantity;
      return total;
    }, 0);

    return (
      <BagIconWrapper>
        <BagIconImg width={ this.props.width }src={Icon} alt="Ver sacola" />
        <ItemsOnBag style={
          { display: itemsOnBag > 0 ? 'block' : 'none' }
        }>{itemsOnBag}</ItemsOnBag>
      </BagIconWrapper>
    );
  }
}

