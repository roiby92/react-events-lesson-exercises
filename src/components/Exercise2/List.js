import React, { Component } from 'react';
import Contact from './Contact'
class List extends Component {
  //should recieve the prop "contact"
  render() {
    return (
      <div >
        <Contact name={this.props.contact} display={this.props.display}/>
        {/* Should render an array of Contact components , with the prop "name"*/}
      </div>
    );
  }
}

export default List;
