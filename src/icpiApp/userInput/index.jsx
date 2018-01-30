import React from 'react';
import PropTypes from 'prop-types';
import FileInput from './FileInput.jsx';
import ButtonInput from './ButtonInput.jsx';

export default class UserInput extends React.Component {
  constructor(props){
    super(props);
    this.nextButton = this.nextButton.bind(this);
    this.prevButton = this.prevButton.bind(this);
  }

  nextButton() {
    const newStep = this.props.step + 1;

    this.props.setStateItem('step', newStep)
  }

  prevButton() {
    const newStep = this.props.step - 1;

    this.props.setStateItem('step', newStep)
  }

  render() {
    const isStartButtonDisabled = (this.props.step !== 0);
    const isResetButtonDisabled = (this.props.step < 1);
    const isNextButtonDisabled = (this.props.step === this.props.maxStep || isResetButtonDisabled);
    const isPrevButtonDisabled = (this.props.step <= 1 || !isStartButtonDisabled)
    return (
      <div>
        <FileInput setStateItem={this.props.setStateItem}/>
        <div>
          <p>Feature Count: {this.props.traitCount}</p>
          <p>Vertex Count: {this.props.vertexCount}</p>
        </div>
        <div>
          <ButtonInput name="Reset" doOnClick={this.props.resetButton} isDisabled={isResetButtonDisabled}/>
          <ButtonInput name="Start" doOnClick={this.props.startButton} isDisabled={isStartButtonDisabled}/>
        </div>
        <div>
          <ButtonInput name="Prev" doOnClick={this.prevButton} isDisabled={isPrevButtonDisabled} />
          <ButtonInput name="Next" doOnClick={this.nextButton} isDisabled={isNextButtonDisabled} />
        </div>
      </div>
    );
  }
}

UserInput.propTypes = {
  maxStep: PropTypes.number,
  vertexCount: PropTypes.number,
  traitCount: PropTypes.number,
  step: PropTypes.number,
  startButton: PropTypes.func,
  resetButton: PropTypes.func,
  setStateItem: PropTypes.func
};
