import styled, { css } from 'styled-components';

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
  color: #313135;
  text-align: center;
  transition: all .35s ease-in-out;

  &:hover {
    background: #f5f5f5;
    border-radius: 4px;
  }

  img {
    max-width: 180px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.span`
  font-family: "Open Sans";
  font-size: ${props => `${ props.fontSize }px`};
  font-weight: 400;
  color: #313135;
  line-height: 14px !important;
`;

export const Divisor = styled.span`
  line-height: 1.3 !important;
  color: #dfbd00;
`;

export const Currency = styled.span`
  font-size: 12px;
`;

export const ItemPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3 !important;
`;

export const ItemInstallments = styled.span`
  font-size: 14px;
  color: #999999;
  line-height: 1.3 !important;
`;

export const BuyButton = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 2px solid #202025;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: #202025;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-in-out;
  outline: 0;
  cursor: pointer;

  &:focus, :active {
    outline: 0;
  }

  &:hover {
    background: #202025;
    color: #ffffff;
  }

  ${props =>
  props.secondary &&
  css`
    padding: 0.75rem 1rem;
    margin: 2rem 0;
    width: 100%;
    border-radius: 4px;
    background: #000000;
    color: white;
    cursor: pointer;
    transition: all .15s ease-in-out;

    &:hover {
      color: #000000;
      background: #dfbd00;
    }
  `};
`;