import React from 'react';
import PropTypes from 'prop-types';
import TextVisualisation from './textVisualisation/index.jsx';

export default class Visualisation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      highlightedInstance: '',
      highlightedNeighbours: ''
    }

    this.highlightInstance=this.highlightInstance.bind(this);
    this.highlightNeighbours=this.highlightNeighbours.bind(this);
  }

  highlightInstance() {}

  highlightNeighbours() {}

  render() {
    return (
      <div>
        <TextVisualisation
          highlightInstance={this.highlightInstance}
          highlightNeighbours={this.highlightNeighbours}
          collocations={this.props.collocations}
          icpiTree={this.props.icpiTree}
        />
      </div>
    );
  }
}

Visualisation.propTypes = {
  collocations: PropTypes.object,
  icpiTree: PropTypes.object,
  pointData: PropTypes.array
};
