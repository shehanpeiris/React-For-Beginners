import React from "react";

class AddFishForm extends React.Component {

  // Creating refs to extract form data for new fish
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();


  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };
  
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name"></input>
        <input type="text" name="price" ref={this.priceRef} placeholder="Price"></input>
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description"></textarea>
        <input type="text" name="image" ref={this.imageRef} placeholder="Image"></input>
        <button type="submit">+ Add Fish</button>
      </form>
    );
  };
};

export default AddFishForm;