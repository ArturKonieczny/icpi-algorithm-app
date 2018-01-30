import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const invalid = props.isValid ? {} : {outlineColor: '#FF0000', outlineStyle: 'solid'};

  return (
    <div>
      <span>{props.inputLabel}</span><input type='text' onChange={props.onValueChange} disabled={props.isDisabled} style={invalid}/>
    </div>
  );

}

TextInput.propTypes = {
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onValueChange: PropTypes.func,
  inputLabel: PropTypes.string
};

export default TextInput;
