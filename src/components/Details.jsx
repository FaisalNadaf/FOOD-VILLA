import React from "react";

class Details extends React.Component {
  render() {

 
    return (
      <>
        <div className="text-4xl">
          This ia details component class componenet
        </div>
        <div className="text-2xl">
          <p>{this.props.name}</p>
          <p>{this.props.number}</p>
          <p>{this.props.location}</p>
        </div>
      </>
    );
  }
}

export default Details;
