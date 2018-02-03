import React from 'react';
import PropTypes from 'prop-types';

/**
 * Helper class for refreshing the Sigma Graph.
 */
export default class GraphLoader extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {loaded: false};
  }

  _load(graph) {
    if( graph && typeof graph !== 'undefined' && typeof this.props.sigma !== 'undefined' ) {
      this.props.sigma.graph.clear();
      this.props.sigma.graph.read(graph);
      this.props.sigma.refresh();
    }
    this.setState({loaded:true})
  }

  componentDidMount() {
    this._load(this.props.graph)
  }

  componentWillReceiveProps(props) {
    if(props.graph !== this.props.sigma.graph) {
      this.setState({loaded:false})
      this._load(props.graph)
    }
  }

  render() {
    return null;
  }
}

GraphLoader.propTypes = {
  sigma: PropTypes.object,
  graph: PropTypes.object
}
