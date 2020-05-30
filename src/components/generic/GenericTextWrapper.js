import React, { Component } from "react";

class GenericTextWrapper extends Component {
  render() {
    return <p className={this.props.className}>{this.props.children}</p>;
  }
}

export default GenericTextWrapper;
