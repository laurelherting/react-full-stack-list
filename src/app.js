import React, { Component } from 'react';
import './index.scss';

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
      </div>
    );
  }
}

const items = [
  {
    active: true,
    popularname: 'hedgehog',
    scientificname: 'Erinaceinae'
  },
  {
    active: true,
    popularname: 'cat',
    scientificname: 'Felis catus'
  },
  {
    active: false,
    popularname: 'tiger',
    scientificname: 'Panthera tigris'
  }
];

const mapped = items
  .filter(x => x.active) //
  .map(x => x.popularname); // ['Shane', 'Sally']

console.log("true");
function createHtmlList(items) {
  const listElements = items.map(x => <li>${x}</li>).join('\n');
  return <ul>\n${listElements}\n</ul>;
}

createHtmlList(mapped);

export default App;
