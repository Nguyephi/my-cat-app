import React from 'react';
import './App.css';

const Cats = [
  {name: 'Missy',
  color: 'tabby',
  special_ability: 'Catching mice',
  adopted: true,
  image_url: 'https://cdn0.wideopenpets.com/wp-content/uploads/2018/02/AdobeStock_109255057-770x405.jpg}'},
  {name: 'Snowball',
  color: 'white',
  special_ability: 'Jumping',
  adopted: false,
  image_url:"https://www.thehappycatsite.com/wp-content/uploads/2017/11/white.jpg"},
  {name: 'Mr. Snuggles',
  color: 'black',
  special_ability: 'Time travel',
  adopted: false,
  image_url:"https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg"}
]

class Cat extends React.Component {
  render() {
    let color = ''
      if (this.props.adopted === true) {
        color = 'green'
      } else {
        color = 'red'
      }
      return <div style={{borderBottom: "1px solid grey", marginTop: "30px"}}>
        <h3 style={{ color: color }}>{this.props.name}</h3>
        <ul >
          <li style={{listStylePosition: "inside",}}>
          <div style={{display: "inline-flex"}}><strong>Color:</strong>
            <p style={{margin: '0 0 20px 5px'}}> 
              {this.props.color} 
            </p>
          </div>
          </li>
          <li style={{listStylePosition: "inside", marginBottom: "25px"}}>
          <strong>Special Abililty:</strong> {this.props.special_ability}
          </li>
          <img style={{height: "150px", width: "200px"}} src={this.props.image_url} />
        </ul>
      </div>
}
}

function App() {
  return (
    <div className="App">
  	   <h1> Welcome to Phil's Cat App</h1>
       <h2> This is a list of awesome, cute cats.</h2>
       <p> I wrote this in React!  </p>
       <div style={{borderTop: "1px solid grey"}}></div>
       <h2 style={{borderBottom: "1px solid grey", padding: '10px 0 30px 0'}}>Here are my cats:</h2>
       {Cats.map( cat => 
        <Cat {...cat} />
      )}
    </div>
  );
}

export default App;
