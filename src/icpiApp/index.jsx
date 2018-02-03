import React from 'react';
import buildIcpi from 'icpi-tree';
import findCollocations from 'icpi-algorithm';
import UserInput from './userInput/index.jsx';
import { TextVisualisation, GraphVisualisation } from './visualisation';

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
  collocations: [],
  highlighted: {}
};

export default class IcpiApp extends React.Component {
  constructor(props){
    super(props);
    this.state = defaultState;
    this.setStateItem = this.setStateItem.bind(this);
    this.startButton = this.startButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.highlight=this.highlight.bind(this);
  }

  /**
  * Sets new value for the state item with the given name.
  * @param {String} itemName Name of the item to be changed.
  * @param {[type]} newData  New value.
  */
  setStateItem(itemName, newData) {
    const newState = {};

    newState[itemName] = newData;
    this.setState(newState);
  }

  /**
   * Resets state to the initial value.
   */
  resetButton() {
    this.setStateItem('traitCount', 0);
    this.setStateItem('vertexCount', 0);
    this.setStateItem('step',0);
  }

  /**
   * Initialise the app. Process the uploaded data and display the results.
   */
  startButton() {
    const { pointData, icpiTree } = buildIcpi(this.state.inputData, this.state.maxDist);
    const collocations = findCollocations(pointData, icpiTree, this.state.minPrev);
    const lastItemIndex = collocations.length - 1;
    const lastItem = collocations.slice(-1);
    const maxStep = (lastItem.length === 1 && Object.keys(lastItem[0]).length !== 0) ? lastItemIndex : lastItemIndex - 1;
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
  /**
   * Sets the 'highlighted' state item.
   * @param  {Object} values Hashmap of vertices and edges to be highlighted on graph.
   */
  highlight(values) {
    this.setState({
      highlighted: values
    });
  }

  render() {
    const currentCollocations = this.state.collocations[this.state.step] || {};
    const prevCollocations = this.state.collocations[this.state.step - 1] || {};

    return (
      <div className='app-container'>
        <UserInput
          setStateItem={this.setStateItem}
          resetButton={this.resetButton}
          startButton={this.startButton}
          traitCount={this.state.traitCount}
          vertexCount={this.state.vertexCount}
          maxStep={this.state.maxStep}
          step={this.state.step}
        />
        <GraphVisualisation
          step={this.state.step}
          icpiTree={this.state.icpiTree}
          pointData={this.state.pointData}
          highlighted={this.state.highlighted}
        />
        <TextVisualisation
          step={this.state.step}
          collocations={currentCollocations}
          icpiTree={this.state.icpiTree}
          prevCollocations={prevCollocations}
          highlight={this.highlight}
        />
      </div>
    );
  }
}
