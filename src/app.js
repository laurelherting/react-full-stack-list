import React, { Component } from 'react';
import './index.scss';
import LoginForm from './loginForm';

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
    this.state = { message:"" }; 
  }
  onButton() {
    console.log('Animal');
    this.setState({ message: "User not logged in" });
  }

  render() {
    return (
      <div>
        <div className="header">
          <img src="https://oup.useremarkable.com/production/images/uploads/2315/original/baby-hedgehog.jpg?147195945" alt="hedgehog" />
          <h2>Hedgehogs, Tigers, Cats ... ROAR!!! (Make some noise Gizmo, Go!)</h2>
          <img src="https://s-media-cache-ak0.pinimg.com/originals/3c/20/63/3c2063499d5371f1212f1050d5577041.jpg" />
          <img src="http://i.imgur.com/gbwgfw6.jpg" />
        </div>
        <input type="button" value="Click here for more" onClick={() => this.onButton()} />
        <section>
          <h3>{this.state.message}</h3>
          <p>Check out the list below to see my favorite animals!</p>
        </section>
        <ul>
          {items.map((x) => (
          <li key={x.id}>{x.popularname} : {x.scientificname}</li>
          ),
          )}
        </ul>
        <section>
          <p>Now it's your turn to add your favorite animals!</p>
        </section>
        <LoginForm />
      </div>
    );
  }
}

export default App;
