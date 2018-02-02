import React from 'react';
import PropTypes from 'prop-types';
import { Sigma } from 'react-sigma';
import GraphLoader from './GraphLoader.jsx';
import settings from './settings';
import { getTraitColor, getTraitName } from '../dictionaries';

const nodeSize = 1;

export default class GraphVisualisation extends React.Component {
  render() {
    if (this.props.step <= 0) {
      return <div></div>
    }

    const nodes = this.props.pointData.map((point) => {
      return {
        id: point.id,
        size: nodeSize,
        x: point.locationX,
        y: point.locationY,
        label: `${getTraitName(point.trait)}${point.id}`,
        color: this.props.highlighted[point.id] || getTraitColor(point.trait)
      };
    });

    const edges = [];
    for (const key of Object.keys(this.props.icpiTree)) {
      const [ sourcePoint ] = key.split(':');

      for (const targetPoint of this.props.icpiTree[key]) {
        const id = `${sourcePoint}:${targetPoint}`;
        edges.push({
          id,
          source: sourcePoint,
          target: targetPoint,
          color: this.props.highlighted[id] || '#000000'
        });
      }
    }

    return (
      <div className='graph-container'>
        <Sigma settings={settings}>
          <GraphLoader graph={{nodes, edges}} />
        </Sigma>
      </div>
    );
  }
}

GraphVisualisation.propTypes = {
  step: PropTypes.number,
  icpiTree: PropTypes.object,
  pointData: PropTypes.array,
  highlighted: PropTypes.object
}
