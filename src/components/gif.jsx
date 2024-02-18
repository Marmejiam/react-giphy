import React, { Component } from "react";

class Gif extends Component {

  handleClick = () => {
    this.props.id;
  }
  render() {
    const src = `https://i.giphy.com/${this.props.id}.gif`;
    return (
      <img src= {src} alt="" className="gif"
      onClick={this.handleClick}
      />
    );
  }

}

export default Gif;
