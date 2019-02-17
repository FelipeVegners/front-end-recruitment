import React, { Component } from 'react';

import { OpenBagButton } from '../../theme/OpenBagButtonStyles';

import BagIcon from '../Bag/BagIcon';

import { MainHeader } from '../../theme/HeaderStyles';

export default class Header extends Component {

  render() {

    return (
      <MainHeader>
        <div className="row">
          <div className="d-none d-md-block col-md-10"></div>
          <div className="col-10 offset-1 col-md-1 offset-md-0 d-flex flex-column align-items-end">
            <OpenBagButton
              onClick={() => {
                this.props.showBag();
            }}>
              <BagIcon width={ 32 } bagList={ this.props.bagList }/>
            </OpenBagButton>
          </div>
        </div>
      </MainHeader>
    );
  }
}
