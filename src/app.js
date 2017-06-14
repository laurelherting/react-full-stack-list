import React, { Component } from 'react';
import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.onButton = this.onButton.bind(this);
  }
  onButton() {
    console.log('HI');
  }
  render() {
    return (
      <div>
        <section>
          <p>this is a list</p>
        </section>
        <input type="button" onClick={() => this.onButton()} />
      </div>
    );
  }
}

export default App;
