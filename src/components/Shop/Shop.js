import React, { Component } from 'react';

import ProductsList from '../../pages/ProductsList';

import Header from '../Header/Header';
import Bag from '../Bag/Bag';

import { BagReveal } from '../../theme/BagStyles';


export default class Shop extends Component {

  constructor(props) {
    super(props);

    this.showBag = this.showBag.bind(this);
    this.hideBag = this.hideBag.bind(this);
    this.addToBag = this.addToBag.bind(this);
    this.removeFromBag = this.removeFromBag.bind(this);
    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);

    this.state = {
      isBagOpen: false,
      bagList: {}
    }
  }

  componentDidMount() {
    // Atualizando o array de produtos com dados do localStorage
    const products = JSON.parse(localStorage.getItem("productsOnBag"));
    
    // Se houver dados no localStorage, atualize o array de produtos da
    if(products) {
      this.setState({ bagList: products });
    }
  }

  // Função para adicionar na sacola
  addToBag = (item) => {
    let itemFound = false;
    // Mapeando o objeto pela key para aumentar a performance da consulta
    Object.keys(this.state.bagList).map((key) => {
      const bagItem = this.state.bagList[key];
      // Se já houver o mesmo produto na sacola, atualize a quantidade e retorne o item
      if(bagItem.id === item.id) {
        itemFound = true;
        bagItem.quantity++;
        return bagItem;
        
      } else {
        return bagItem;        
      }
    });
    // Se não houver, adicione à sacola
    if(!itemFound) {
      const addItemToBagList = this.state.bagList;
      addItemToBagList[item.id] = {...item };
    }

    const newBagList = this.state.bagList;
    this.setState({ bagList: newBagList });
    // Grava no localStorage a sacola atualizada
    localStorage.setItem("productsOnBag", JSON.stringify(newBagList));
    this.showBag();

  }

  removeFromBag = (key) => {
    const emptyBagListKey = this.state.bagList;
    emptyBagListKey[key] = '';
    delete this.state.bagList[key];
    const newbagList = this.state.bagList;
    this.setState({ bagList: newbagList });
    localStorage.setItem("productsOnBag", JSON.stringify(newbagList));
  }

  increaseItem = (id) => {
    const increaseItemQty = this.state.bagList;
    increaseItemQty[id].quantity++
    this.setState({ bagList: {...this.state.bagList} });
    localStorage.setItem("productsOnBag", JSON.stringify(this.state.bagList));
  }

  decreaseItem = (id) => {
    const decreaseItemQty = this.state.bagList;
    decreaseItemQty[id].quantity--;
    if(this.state.bagList[id].quantity === 0) {
      this.removeFromBag(id);
    } else {
      this.setState({ bagList: {...this.state.bagList} });
      localStorage.setItem("productsOnBag", JSON.stringify(this.state.bagList));
    }
  }

  showBag = () => {
    this.setState({
      isBagOpen: true
    })
  }

  hideBag = () => {
    this.setState({
      isBagOpen: false
    })
  }

  render() {
    const show = {
      right: '0',
      opacity: '1',
    }
    const hide = {
      right: '-100%',
      opacity: '1',
    }
    const bagVis = this.state.isBagOpen ? show : hide;

    return (
      <div className="Shop">
        <Header showBag={this.showBag} bagList={this.state.bagList}/>
        <ProductsList showBag={ this.showBag } addToBag={ this.addToBag } />
        <BagReveal style={ bagVis }>
          <Bag bagList={ this.state.bagList } removeFromBag={ this.removeFromBag } hideBag={ this.hideBag } increaseItem={ this.increaseItem } decreaseItem={ this.decreaseItem } />
        </BagReveal>
      </div>
    );
  }
}
