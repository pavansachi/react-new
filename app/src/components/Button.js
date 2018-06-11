'use strict';
import React from 'react';

class Button extends React.Component {
//  static propTypes = {
  //  label: React.PropTypes.string,
 //   className: React.PropTypes.string
//  }
//  static defaultProps = {
//    label: 'button',
//    className: 'default-class'
//  }
  constructor(props) {
    super(props);

    this.state = {
      label: "Not so pretty button"
    }

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      label: "Pretty button now"
    });
  }

  render() {
    return (
      <div className={this.props.className} 
       onClick={this._onClick}>
        {this.state.label}
      </div>
    )
  }
}
export default Button;
