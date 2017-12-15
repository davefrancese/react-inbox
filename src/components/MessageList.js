import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {
  render() {
    return (
      <div className="Message-List">
        {this.props.messages.map(message =>
          <Message
            key={message.id}
            message={message}
            selectStar={ ()=> this.props.selectStar(this.props.messages.indexOf(message))}
            selectedMessage={ ()=> this.props.selectedMessage(this.props.messages.indexOf(message))}
            />) }
      </div>
    );
  }
}

export default MessageList;
