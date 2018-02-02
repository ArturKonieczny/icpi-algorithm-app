import React from 'react';
import PropTypes from 'prop-types';
import { Sigma } from 'react-sigma';
import settings from './settings';
import { getTraitColor, getTraitName } from '../dictionaries';

const nodeSize = 1;

const GraphVisualisation = (props) => {
  const nodes = props.pointData.map((point) => {
    return {
      id: point.id,
      size: nodeSize,
      x: point.locationX,
      y: point.locationY,
      label: `${getTraitName(point.trait)}${point.id}`,
      color: props.highlighted[point.id] || getTraitColor(point.trait)
    };
  });
  const edges =[];
  for (const key of Object.keys(props.icpiTree)) {
    const [ sourcePoint ] = key.split(':');

    for (const targetPoint of props.icpiTree[key]) {
      const id = `${sourcePoint}:${targetPoint}`;
      edges.push({
        id,
        source: sourcePoint,
        target: targetPoint,
        color: props.highlighted[id] || '#000'
      });
    }
  }

  return (
    <div className='graph-container'>
      <Sigma graph={{nodes, edges}} settings={settings} />
    </div>
  );
}

export default GraphVisualisation;

GraphVisualisation.propTypes = {
  icpiTree: PropTypes.object,
  pointData: PropTypes.array,
  highlighted: PropTypes.object
}
