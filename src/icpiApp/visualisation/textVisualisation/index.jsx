import React from 'react';
import PropTypes from 'prop-types';
import CollocationTable from './collocationTable/index.jsx';

export default class TextVisualisation extends React.Component {
  render() {
    const collocationArrays = Object.keys(this.props.collocations).map((key, index) => {
      return (<CollocationTable
                collocation={this.props.collocations[key]}
                collocationName={key}
                prevCollocations={this.props.prevCollocations}
                icpiTree={this.props.icpiTree}
                highlight={this.props.highlight}
                key={index}
              />);
    });

    return (
      <div>
        {collocationArrays}
      </div>
    );
  }
}

TextVisualisation.propTypes = {
  collocations: PropTypes.object,
  prevCollocations: PropTypes.object,
  icpiTree: PropTypes.object,
  highlight: PropTypes.func
};
