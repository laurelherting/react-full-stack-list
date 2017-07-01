import React, { Component } from 'react';
import {
  PopupboxManager,
  PopupContainer
} from 'react-popupbox';

export class Popup extends Component {
  openPopupBox() {
    const content = (
      <div> 
        <p className="alert">You aren't logged in!</p>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {
    return (
      <div> 
        <button onClick={this.onClickTrigger}>Click me</button>
        <PopupContainer />
      </div>
    )
  }
}
