import React, { Component } from 'react';

export default class SizeSelectorItem extends Component {
  render() {
    const {  product } = this.props;
    const { itemSize } = this.props;
    return (
      <li>
        <input 
        type="radio"
        id={ product.id + itemSize }
        name={ product.title }
        value={ itemSize }
        onChange={ () => { 
          console.log(itemSize, product.id)}
        }/>
        <label htmlFor={ product.id + itemSize }>{ itemSize }</label>
      </li>
    )
  }
}
