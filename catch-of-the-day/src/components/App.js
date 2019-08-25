import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Errday" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  };
};

export default App;
