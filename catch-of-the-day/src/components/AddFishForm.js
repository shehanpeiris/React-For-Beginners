import React from "react";

class AddFishForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="text" name="price" placeholder="Price"></input>
        <input type="text" name="status" placeholder="Status"></input>
        <input type="text" name="desc" placeholder="Description"></input>
        <input type="text" name="image" placeholder="Image"></input>
      </form>
    );
  };
};

export default AddFishForm;