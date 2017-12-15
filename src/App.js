import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/1"
            }
          },
          "id": 1,
          "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
          "starred": true,
          "selected": false,
          "read": false,
          "labels": ["dev", "personal"]
        }, {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/2"
            }
          },
          "id": 2,
          "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
          "starred": false,
          "selected": true,
          "read": false,
          "labels": []
        }, {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/3"
            }
          },
          "id": 3,
          "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
          "starred": true,
          "selected": false,
          "read": false,
          "labels": ["dev"]
        }, {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/4"
            }
          },
          "id": 4,
          "subject": "We need to program the primary TCP hard drive!",
          "starred": false,
          "selected": true,
          "read": true,
          "labels": []
        }, {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/5"
            }
          },
          "id": 5,
          "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
          "starred": false,
          "selected": false,
          "read": false,
          "labels": ["personal"]
        }, {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/6"
            }
          },
          "id": 6,
          "subject": "We need to back up the wireless GB driver!",
          "starred": true,
          "selected": false,
          "read": true,
          "labels": []
        }, {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/7"
            }
          },
          "id": 7,
          "subject": "We need to index the mobile PCI bus!",
          "starred": false,
          "selected": false,
          "read": true,
          "labels": ["dev", "personal"]
        }, {
          "_links": {
            "self": {
              "href": "https://angular-inbox-api.herokuapp.com/api/messages/8"
            }
          },
          "id": 8,
          "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
          "starred": true,
          "selected": false,
          "read": true,
          "labels": []
        }
      ]
    }
  }

  unreadCount = () => {
    let count = this.state.messages;
    let arr = [];
    for (let i = 0; i < count.length; i++) {
      if (count[i].read === false) {
        arr.push(count[i])
      }
    }
    return arr.length;
  }

  selectedMessage = (i) => {
    let single = this.state.messages;
    if (single[i].selected === true) {
      single[i].selected = false
      this.setState({messages: single})
    } else {
      single[i].selected = true
      this.setState({messages: single})
    }
  }

  selectStar = (i) => {
    let single = this.state.messages;
    if (single[i].starred === true) {
      single[i].starred = false
      this.setState({messages: single})
    } else {
      single[i].starred = true
      this.setState({messages: single})
    }
  }

  bulkSelect = () => {
    let data = this.state.messages;
    let selected = data.filter(i => i.selected === true)
    if (selected.length === data.length) {
      for (let i = 0; i < data.length; i++) {
        data[i].selected = false;
        this.setState({messages: data})
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        data[i].selected = true;
        this.setState({messages: data})
      }
    }
  }

  markRead = () => {
    let data = this.state.messages;
    for (let i = 0; i < data.length; i++) {
      if (data[i].selected === true) {
        data[i].read = true;
        this.setState({messages: data})
      }
    }
  }

  markUnread = () => {
    let data = this.state.messages;
    for (let i = 0; i < data.length; i++) {
      if (data[i].selected === true) {
        data[i].read = false;
        this.setState({messages: data})
      }
    }
  }

  applyLabel = (e) => {
    e.preventDefault()
    let newLabel = this.state.messages;
    let x = e.target.value
    for (let i = 0; i < newLabel.length; i++) {
      if (newLabel[i].selected === true) {
        newLabel[i].labels.push(e.target.value)
        this.setState({messages: newLabel})
      }
    }
  }

  removeLabel = (e) => {
    e.preventDefault();
    let x = e.target.value
    let removeLabel = this.state.messages;
    for (let i = 0; i < removeLabel.length; i++) {
      if (removeLabel[i].selected === true) {
        let labels = removeLabel[i].labels
        removeLabel[i].labels = labels.filter(i => i !== x)
        this.setState({messages: removeLabel})
      }
    }
  }

  render() {
    return (<div className="App">
      <Toolbar
        messages={this.state.messages}
        unreadCount={this.unreadCount}
        bulkSelect={this.bulkSelect}
        markRead={this.markRead}
        markUnread={this.markUnread}
        applyLabel={this.applyLabel}
        removeLabel={this.removeLabel}
      />
      <MessageList
        messages={this.state.messages}
        selectedMessage={this.selectedMessage}
        selectStar={this.selectStar}
      />
    </div>);
  }
}

export default App;
