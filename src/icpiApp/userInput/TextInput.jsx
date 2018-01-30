import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.inputLabel}</span><input type='text'/>
      </div>
    );
  }
}

TextInput.propTypes = {
  inputLabel: PropTypes.string
};
