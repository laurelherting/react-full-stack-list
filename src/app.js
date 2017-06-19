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
    popularname: 'tiger',
    scientificname: 'Panthera tigris',
  },
  {
    id: 3,
    active: false,
    popularname: 'cat',
    scientificname: 'Felis catus',
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
        <img src="https://s-media-cache-ak0.pinimg.com/originals/3c/20/63/3c2063499d5371f1212f1050d5577041.jpg" />
        <img src="http://i.imgur.com/gbwgfw6.jpg" />
       </div>
          <section>
            <p>Check out the list below to see my favorite animals!</p>
          </section>
          <input type="button" value="Click here for more" onClick={() => this.onButton()} />
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
