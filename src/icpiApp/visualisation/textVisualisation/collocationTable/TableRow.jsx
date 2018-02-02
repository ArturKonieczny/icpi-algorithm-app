import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const prevInstancePoints = [];
  const prevInstancePointsNeighb = [];

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


  props.prevInstance.forEach((point, index) => {
    prevInstancePoints.push(
      <p key={index}>
        {`${point} neighb.`}
      </p>
    );

    const pointNeighb = props.icpiTree[`${point}:${props.newTrait}`] || [];

    if (pointNeighb.length !== 0) {
      prevInstancePointsNeighb.push(<p onMouseEnter={highlightNeighb} onMouseLeave={deHighlightNeighb} id={point} title={pointNeighb.join(',')} key={index}>{`${pointNeighb.join(', ')}`}</p>);
    } else {
      prevInstancePointsNeighb.push(<p key={index}>&#8709;</p>);
    }
  });

  const newInstances = props.collocation.instances.filter((instance) => {
    return (props.prevInstance.join(',') === instance.slice(0,-1).join(','));
  }).map((instance, index) => {
    return (
      <p onMouseEnter={highlightInstance} onMouseLeave={deHighlightInstance} title={instance.join(',')} key={index}>
        {`(${instance.join(',')})`}
      </p>
    );
  });

  if (newInstances.length === 0) {
    newInstances.push([<p key={0}>&#8709;</p>]);
  }

  return (
    <tr>
      <td className='text-vis-cell'>
        <p onMouseEnter={highlightInstance} onMouseLeave={deHighlightInstance} title={`${props.prevInstance}`}>{`(${props.prevInstance.join(',')})`}</p>
      </td>
      <td className='text-vis-cell_small'>
        {prevInstancePoints}
      </td>
      <td className='text-vis-cell'>
        {prevInstancePointsNeighb}
      </td>
      <td className='text-vis-cell'>
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
