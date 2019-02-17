import styled from 'styled-components';

export const BagIconWrapper = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  width:48px;
`;

export const BagIconImg = styled.img`
  width: ${props => `${props.width}px`};
`;

export const ItemsOnBag = styled.span`
  background: #dfbd00;
  display: block;
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  line-height: 1.6;
  text-align: center;
`;