import React from "react";

class Image extends React.Component {
  render() {
    return (
      <img 
        src={this.props.image} 
        className="my-photo"
        alt=""
      />
    )
  }
}

export default Image
