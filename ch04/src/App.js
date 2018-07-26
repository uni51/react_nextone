import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return <div>こんにちは! {this.props.name}さん</div>
  }
}

export default Hello;
