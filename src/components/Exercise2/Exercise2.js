import React, { Component } from 'react';
import List from './List'
import Conversation from './Conversation'


class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

  displayConvo = name => {
    this.setState({
      displayConversation: name
    })
  }

  displayList =()=> this.setState({displayConversation: null})

  render() {
    return (
      <div >
        {/* If displayConverastion is null - 
    App should render List, otherwise it should display Conversation */}
        {this.state.displayConversation === null ?
          this.state.conversations.map(c => <List key={c.with} contact={c.with} display={this.displayConvo}/>) :
          this.state.conversations.filter(c=>c.with === this.state.displayConversation)
          .map(c=> <Conversation convo={c.convo} sender={this.state.displayConversation} list={this.displayList}/>)}
      </div>
    );
  }
}

export default Exercise2;
