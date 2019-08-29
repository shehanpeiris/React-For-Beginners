import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
  // Set initial state
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeid}/fishes`, {
      context: this,
      state: "fishes"
    });
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
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

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = {...this.state.order};
    // 2. Add to order or update quantity of ordered item
    order[key] = order[key] + 1 || 1;
    // 3. update order object in state
    this.setState({order: order});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Errday" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
            <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}
            />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  };
};

export default App;
