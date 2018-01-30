import React from 'react';
import buildIcpi from 'icpi-tree';
import findCollocations from 'icpi-algorithm';
import UserInput from './userInput/index.jsx';

const defaultState = {
  maxDist: 3,
  minPrev: 0,
  maxStep: 0,
  traitCount: 0,
  vertexCount: 0,
  step: -1,
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
    this.setStateItem('traitCount', 0);
    this.setStateItem('vertexCount', 0);
    this.setStateItem('step',0);
  }

  startButton() {
    const { pointData, icpiTree } = buildIcpi(this.state.inputData, this.state.maxDist);
    const collocations = findCollocations(pointData, icpiTree);
    const lastItemIndex = collocations.length - 1;
    const lastItemLength = Object.keys(collocations.slice(-1)).length;
    const maxStep = (lastItemLength !== 0) ? lastItemIndex : lastItemIndex - 1;
    const traitCount = Object.keys(collocations[0]).length;
    const vertexCount = pointData.length;

    const newState = {
      pointData,
      icpiTree,
      collocations,
      maxStep,
      traitCount,
      vertexCount,
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
          maxStep={this.state.maxStep}
          step={this.state.step}
        />
      </div>
    );
  }
}
