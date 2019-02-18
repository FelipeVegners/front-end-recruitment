import React, { Component } from 'react';

import SizeSelectorItem from './SizeSelectorItem';

import { SizeSelectorList } from '../../theme/SizeSelectorStyles';

export default class SizeSelector extends Component {
  render() {
    const {  product } = this.props;
    return (
      <div>
        <SizeSelectorList>
          { product.availableSizes.map((itemSize, index) => {
              return (
                <SizeSelectorItem key={ index } product={ product } itemSize={ itemSize }/>
              )
          })}
        </SizeSelectorList>
      </div>
    )
  }
}
