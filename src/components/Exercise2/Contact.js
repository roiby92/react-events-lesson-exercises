import React, { Component } from 'react';

class Contact extends Component {

  displayConvo =()=>{
    this.props.display(this.props.name)
  }

  render() {

    return (
      <div >
        <div onClick={this.displayConvo}>{this.props.name}</div>
        {/* should render a "name" recieved in props */}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
