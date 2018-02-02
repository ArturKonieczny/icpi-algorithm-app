import React from 'react';
import PropTypes from 'prop-types';
import FileInput from './FileInput.jsx';
import ButtonInput from './ButtonInput.jsx';
import TextInput from './TextInput.jsx';

export default class UserInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMinPrevValid: true,
      isMaxDistValid: true
    }
    this.nextButton = this.nextButton.bind(this);
    this.prevButton = this.prevButton.bind(this);
    this.checkMinPrev = this.checkMinPrev.bind(this);
    this.checkMaxDist = this.checkMaxDist.bind(this);
  }

  nextButton() {
    const newStep = this.props.step + 1;

    this.props.setStateItem('step', newStep)
  }

  prevButton() {
    const newStep = this.props.step - 1;

    this.props.setStateItem('step', newStep)
  }

  checkMinPrev(event) {
    const newValue = Number(event.target.value);

    if (!isNaN(newValue) && newValue >= 0 && newValue <= 1) {
      this.setState({isMinPrevValid: true});
      this.props.setStateItem('minPrev', newValue);
    } else {
      this.setState({isMinPrevValid: false});
    }
  }

  checkMaxDist(event) {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      this.setState({isMaxDistValid: true});
      this.props.setStateItem('maxDist', newValue);
    } else {
      this.setState({isMaxDistValid: false});
    }
  }

  render() {
    const isStartButtonDisabled = (this.props.step !== 0);
    const isResetButtonDisabled = (this.props.step < 1);
    const isNextButtonDisabled = (this.props.step === this.props.maxStep || isResetButtonDisabled);
    const isPrevButtonDisabled = (this.props.step <= 1 || !isStartButtonDisabled);

    return (
      <div className='user-input'>
        <div>
          <FileInput setStateItem={this.props.setStateItem}/>
          <a href="./files/sample_file.txt" download="sample_file.txt">Sample file.</a>
        </div>
        <div>
          <p>Feature Count: {this.props.traitCount}</p>
          <p>Vertex Count: {this.props.vertexCount}</p>
        </div>
        <div>
          <TextInput inputLabel='Max. Dist. ' onValueChange={this.checkMaxDist} isValid={this.state.isMaxDistValid} isDisabled={isStartButtonDisabled}/>
          <TextInput inputLabel='Min. Prev. ' onValueChange={this.checkMinPrev} isValid={this.state.isMinPrevValid} isDisabled={isStartButtonDisabled}/>
        </div>
        <div className='button-container'>
          <ButtonInput name="Reset" doOnClick={this.props.resetButton} isDisabled={isResetButtonDisabled}/>
          <ButtonInput name="Start" doOnClick={this.props.startButton} isDisabled={isStartButtonDisabled}/>
        </div>
        <div className='button-container'>
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
