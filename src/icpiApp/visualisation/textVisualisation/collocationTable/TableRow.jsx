import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  function highlightInstance(event) {
    const points = event.target.title.split(',');
    const highlighted = {};
    points.forEach((point1, index1) => {
      highlighted[point1] = '#000000';
      points.forEach((point2, index2) => {
        if (index2 > index1) {
          highlighted[`${point1}:${point2}`] = `#FF0000`;
        }
      })
    });

    props.highlight(highlighted);
  }

  function deHighlightInstance() {
    props.highlight({});
  }

  function highlightNeighb(event) {
    const points = event.target.title.split(',');
    const centerPoint = event.target.id;
    const highlighted = {};

    highlighted[centerPoint] = `#B0B0B0`;
    for (const point of points) {
      highlighted[point] = `#000000`;
      highlighted[`${centerPoint}:${point}`] = `#FF0000`;
    }

    props.highlight(highlighted);
  }


  function deHighlightNeighb() {
    props.highlight({});
  }

  const prevInstancePoints = [];
  const prevInstancePointsNeighb = [];
  
  props.prevInstance.forEach((point, index) => {
    prevInstancePoints.push(
      <div className='table-entry' key={index}>
        {`${point} neighb.`}
      </div>
    );

    const pointNeighb = props.icpiTree[`${point}:${props.newTrait}`] || [];

    if (pointNeighb.length !== 0) {
      prevInstancePointsNeighb.push(<div className='table-entry hover-gray' onMouseEnter={highlightNeighb} onMouseLeave={deHighlightNeighb} id={point} title={pointNeighb.join(',')} key={index}>{`${pointNeighb.join(', ')}`}</div>);
    } else {
      prevInstancePointsNeighb.push(<div className='table-entry' key={index}>&#8709;</div>);
    }
  });

  const newInstances = props.collocation.instances.filter((instance) => {
    return (props.prevInstance.join(',') === instance.slice(0,-1).join(','));
  }).map((instance, index) => {
    return (
      <div className='table-entry hover-gray' onMouseEnter={highlightInstance} onMouseLeave={deHighlightInstance} title={instance.join(',')} key={index}>
        {`(${instance.join(',')})`}
      </div>
    );
  });

  if (newInstances.length === 0) {
    newInstances.push([<div className='table-entry' key={0}>&#8709;</div>]);
  }

  return (
    <tr>
      <td className='text-vis-cell table-entry-cell'>
        <div className='table-entry hover-gray' onMouseEnter={highlightInstance} onMouseLeave={deHighlightInstance} title={`${props.prevInstance}`}>{`(${props.prevInstance.join(',')})`}</div>
      </td>
      <td className='text-vis-cell-small table-entry-cell'>
        {prevInstancePoints}
      </td>
      <td className='text-vis-cell table-entry-cell'>
        {prevInstancePointsNeighb}
      </td>
      <td className='text-vis-cell table-entry-cell'>
        {newInstances}
      </td>
    </tr>
  );
}


TableRow.propTypes = {
  collocation: PropTypes.object,
  prevInstance: PropTypes.array,
  newTrait: PropTypes.string,
  instances: PropTypes.array,
  icpiTree: PropTypes.object,
  highlight: PropTypes.func
};

export default TableRow;
