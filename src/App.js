import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";

import Shop from './components/Shop/Shop';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700");
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Shop />
      </div>
    );
  }
}

export default App;
