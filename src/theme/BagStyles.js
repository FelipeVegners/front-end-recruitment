import styled from 'styled-components';

export const BagReveal = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
  @media screen and (max-width: 425px) {
    width: 100vw;
  }
  height: 100vh;
  background-color: #202025;
  opacity: 0;
  transition: all .55s ease-in-out;
  overflow: scroll;
  z-index: 2;
`;

export const BagContainer = styled.div`
  color: #ffffff;
`;

export const BagHeader = styled.div`
  padding: 40px 16px;
  @media screen and (max-width: 425px) {
    padding: 24px 8px;
  }
  margin: 0;
  border-bottom: 1px solid #000000;
  button {
    background: transparent;
    color: #ffffff;
    border: none;
    outline: 0;
    &:focus, :active {
      outline: 0;
    }
  }

  h1 {
    margin-left: 1rem;
    margin-top: 5px;
    font-size: 24px;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: -1px;
  }
`;

