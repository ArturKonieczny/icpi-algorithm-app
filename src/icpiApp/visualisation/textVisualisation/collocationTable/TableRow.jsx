import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const prevInstancePoints = [];
  const prevInstancePointsNeighb = [];

  props.prevInstance.forEach((point, index) => {
    prevInstancePoints.push(
      <p key={index}>
        {`${point} neighb.`}
      </p>
    );

    const pointNeighb = props.icpiTree[`${point}:${props.newTrait}`] || [];

    if (pointNeighb.length !== 0) {
      prevInstancePointsNeighb.push(<p key={index}>{`${pointNeighb.join(', ')}`}</p>);
    } else {
      prevInstancePointsNeighb.push(<p key={index}>&#8709;</p>);
    }
  });

  const newInstances = props.collocation.instances.filter((instance) => {
    return (props.prevInstance.join(',') === instance.slice(0,-1).join(','));
  }).map((instance, index) => {
    return (
      <p key={index}>
        {`(${instance})`}
      </p>
    );
  });

  if (newInstances.length === 0) {
    newInstances.push([<p key={0}>&#8709;</p>]);
  }

  return (
    <tr>
      <td>
        <p>{`(${props.prevInstance.join(',')})`}</p>
      </td>
      <td>
        {prevInstancePoints}
      </td>
      <td>
        {prevInstancePointsNeighb}
      </td>
      <td>
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
  icpiTree: PropTypes.object
};

export default TableRow;
