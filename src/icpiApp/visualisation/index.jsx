import React from 'react';
import PropTypes from 'prop-types';
import TextVisualisation from './textVisualisation/index.jsx';

export default class Visualisation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      highlighted: {},
    }

    this.highlight=this.highlight.bind(this);
  }

  highlight(values) {
    this.setState({
      highlighted: values
    });
  }

  render() {
    if (this.props.step <= 0) {
      return (<div></div>);
    }
    return (
      <div>
        <TextVisualisation
          highlightInstance={this.highlightInstance}
          highlightNeighbours={this.highlightNeighbours}
          collocations={this.props.collocations}
          icpiTree={this.props.icpiTree}
          prevCollocations={this.props.prevCollocations}
          highlight={this.highlight}
        />
      </div>
    );
  }
}

Visualisation.propTypes = {
  collocations: PropTypes.object,
  icpiTree: PropTypes.object,
  pointData: PropTypes.array,
  prevCollocations: PropTypes.object,
  step: PropTypes.number
};
