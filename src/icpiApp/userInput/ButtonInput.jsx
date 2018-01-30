import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonInput extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.doOnClick} disabled={this.props.isDisabled}>{this.props.name}</button>
      </div>
    );
  }
}

ButtonInput.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  doOnClick: PropTypes.func
};
