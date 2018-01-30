import React from 'react';
import PropTypes from 'prop-types';

const ButtonInput = (props) => {
  return (
    <div>
      <button onClick={props.doOnClick} disabled={props.isDisabled}>{props.name}</button>
    </div>
  );
}

ButtonInput.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  doOnClick: PropTypes.func
};

export default ButtonInput;
