import React from 'react';
import PropTypes from 'prop-types';

export default class TextVisualisation extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

TextVisualisation.propTypes = {
  collocations: PropTypes.object,
  icpiTree: PropTypes.object,
};
