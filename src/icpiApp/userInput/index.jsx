import React from 'react';
import PropTypes from 'prop-types';
import FileInput from './FileInput.jsx';
import ButtonInput from './ButtonInput.jsx';

export default class UserInput extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const isStartButtonDisabled = (this.props.step !== 0);
    const isResetButtonDisabled = (this.props.step < 1);

    return (
      <div>
        <FileInput setStateItem={this.props.setStateItem}/>
        <span>Feature Count: {this.props.traitCount}</span>
        <span>Vertex Count: {this.props.vertexCount}</span>
        <ButtonInput name="Reset" doOnClick={this.props.resetButton} isDisabled={isResetButtonDisabled}/>
        <ButtonInput name="Start" doOnClick={this.props.startButton} isDisabled={isStartButtonDisabled}/>
      </div>
    );
  }
}

UserInput.propTypes = {
  vertexCount: PropTypes.number,
  traitCount: PropTypes.number,
  step: PropTypes.number,
  startButton: PropTypes.func,
  resetButton: PropTypes.func,
  setStateItem: PropTypes.func
};
