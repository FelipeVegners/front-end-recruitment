import React, { Component } from 'react';

import api from '../services/api';

import Product from '../components/Product/Product'

import './ProductsList.css';

export default class ProductsList extends Component {
  
  state = {
      products: [],
  }

  componentDidMount() {
    // this.loadProductsList();

    api.get('products.json')
    .then(res => {
      const products = res.data;
      this.setState(
        {
          products: products.products.map((product) => {
            return { ...product, quantity: 1 };
          })
        });
    }).catch((error) => {
      //on error
      alert("Ocorreu um erro na chamada da API.");
    });

  }

  addToBag = (index) => {
    this.props.addToBag(this.state.products[index]);
  }

  render() {
    // Desestruturando products do state para o map
    const { products } = this.state;

    return (
      <div className="container list-wrapper">
        <div className="row"> 
          { products.map((product, index) => (
            <Product  key={ index } product={ product } index={ index } addToBag={ this.addToBag } />
          ))}
        </div>
      </div>
    );
  }
}
