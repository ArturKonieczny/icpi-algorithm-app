import React from 'react';
import buildIcpi from 'icpi-tree';
import findCollocations from 'icpi-algorithm';
import UserInput from './userInput/index.jsx';

const defaultState = {
  maxDist: 3,
  minPrev: 0,
  traitCount: '',
  vertexCount: '',
  step: 0,
  inputData: '',
  icpiTree: {},
  pointData: [],
  collocations: []
};

export default class IcpiApp extends React.Component {
  constructor(props){
    super(props);
    this.state = defaultState,
    this.setStateItem = this.setStateItem.bind(this),
    this.startButton = this.startButton.bind(this),
    this.resetButton = this.resetButton.bind(this)
  }

  setStateItem(itemName, newData) {
    const newState = {};

    newState[itemName] = newData;
    this.setState(newState);
  }

  resetButton() {
    this.setState(defaultState);
  }

  startButton() {
    const {pointData, icpiTree} = buildIcpi(this.state.inputData, this.state.maxDist);
    const collocations = findCollocations(pointData, icpiTree);
    const newState = {
      pointData,
      icpiTree,
      collocations,
      step: 1
    };

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <UserInput
          setStateItem={this.setStateItem}
          resetButton={this.resetButton}
          startButton={this.startButton}
          maxDist={this.state.maxDist}
          minPrev={this.state.minPrev}
          traitCount={this.state.traitCount}
          vertexCount={this.state.vertexCount}
          step={this.state.step}
        />
      </div>
    );
  }
}
