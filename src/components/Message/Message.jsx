import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    }
  }
  
  render() {
    return (
      <div className='Message'>
         <img src='smiling-face.png' className='face-icon'/>
        {this.state.message.body}
      </div>
    );
  };

}

export default Message;
