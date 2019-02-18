import styled from 'styled-components';

export const SizeSelectorList = styled.ul`
  display: inline-block;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-right: 4px;
    :nth-last-of-type(1){
      margin-right: 0;
    }

    label {
      box-sizing: border-box;
      background: transparent;
      position: inline-block;
      width: auto;
      height: 6px;
      padding: 10px 6px;
      border-radius: 10px;
      margin: 0 auto;
      font-size: 1rem;
      text-align: center;
      line-height: 0px;
      border: 1px solid #000000;
      transition: all .15s ease-in;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      -webkit-touch-callout: none;
      -o-user-select: none;
      -moz-user-select: none;
    }

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked + label {
      background: #dfbd00;
      color: #000000;
      border: 1px solid #000000;
    }
  }
`;