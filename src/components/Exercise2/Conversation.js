import React, { Component } from 'react';

class Conversation extends Component {


  displayList = () => this.props.list()

  render() {
    return (
      <div >
        {this.props.convo.map(c => {
          return <div>
              <span className={c.sender === "self" ? "Me" : this.props.sender}>{c.sender === "self" ? "Me" : this.props.sender} :</span>
              <span>{c.text}</span>
          </div>
        })}
        <button className="back" onClick={this.displayList}>Back</button>
      </div>
    );
  }
}

export default Conversation;
