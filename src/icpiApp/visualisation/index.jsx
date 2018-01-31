import React from 'react';
import PropTypes from 'prop-types';
import TextVisualisation from './textVisualisation/index.jsx';

export default class Visualisation extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <TextVisualisation collocations={this.props.collocations} icpiTree={this.props.icpiTree} />
      </div>
    );
  }
}

Visualisation.propTypes = {
  collocations: PropTypes.object,
  icpiTree: PropTypes.object,
  pointData: PropTypes.array
};
