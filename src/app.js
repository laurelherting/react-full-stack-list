import React, { Component } from 'react';
import './index.scss';
import LoginForm from './LoginForm';

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
       <div className="header">
          <img src="https://oup.useremarkable.com/production/images/uploads/2315/original/baby-hedgehog.jpg?147195945" alt="hedgehog" />
           <h2>Hedgehogs Rock!</h2>
       </div>
          <section>
            <p>Here is a list of my favorite animals scroll right-></p>
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
