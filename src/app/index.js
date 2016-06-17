import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { sections } from '../data';

import Section from './components/section';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notification: ''
    };
  }

  updateNotification( notification ) {
    console.log("Updating notification", notification);

    this.setState({
      notification: notification
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h2>ʕ·ᴥ·ʔ Kawaii Faces ʕ·ᴥ·ʔ</h2>

        { sections.map( (section, i) => {
          return <Section key={ i } title={ section.title } data={ section.component } onCopy={ (string) => this.updateNotification(string) } />
        }) }

        { this.state.notification &&
          <div className="notification">{this.state.notification}</div>
        }

      </div>
    );
  }

}

