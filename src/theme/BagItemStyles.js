import styled from 'styled-components';

export const BagItemWrapper = styled.div`
  padding: 32px 16px;
  @media screen and (max-width: 425px) {
    padding: 32px 8px;
  }
  margin: 0 !important;
  border-bottom: 1px solid #000000;
  transition: all .35s ease-in-out;
  box-sizing: border-box;
  text-decoration: ${props => `${props.deleted}`};
  opacity: ${props => `${props.opacity}`};

  &:hover {
    background: #32323b;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    
  }

  button {
    padding: 0;
    margin-bottom: 1rem;
    background: transparent;
    color: #ffffff;
    border: none;
    outline: 0;
    &:focus, :active {
      outline: 0;
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const BagItemTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const BagItemDetails = styled.span`
  font-size: 12px;
  color: #999999;
`;

export const BagItemPrice = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #dfbd00;
`;

