import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  
  // Set initial state
  state = {
    fishes: {},
    order: {}
  };
  
  addFish = (fish) => {
    // 1. Take a copy of existing state
    const fishes = {...this.state.fishes};
    // 2. Add a new fish to this.state.fishes
    fishes[`fish${Date.now()}`] = fish;
    this.setState({fishes: fishes});
  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Errday" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  };
};

export default App;
