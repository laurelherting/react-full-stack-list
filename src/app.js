import React, { Component } from 'react';
import './index.scss';

const items = [
  {
    id: 1,
    active: true,
    popularname: 'hedgehog',
    scientificname: 'Erinaceinae',
  },
  {
    id: 2,
    active: true,
    popularname: 'cat',
    scientificname: 'Felis catus',
  },
  {
    id: 3,
    active: false,
    popularname: 'tiger',
    scientificname: 'Panthera tigris',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.onButton = this.onButton.bind(this);
  }
  onButton() {
    console.log('Animal');
  }
  render() {
    return (
      <div>
        <section>
          <p>this is a list of animals</p>
        </section>
        <input type="button" onClick={() => this.onButton()} />
        <ul>
          {items.map((x) => (
            <li key={x.id}>{x.popularname} : {x.scientificname}</li>
            ),
          )}
        </ul>
      </div>
    );
  }
}

export default App;
