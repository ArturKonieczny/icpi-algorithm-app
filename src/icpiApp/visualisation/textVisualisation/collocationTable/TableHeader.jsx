import React from 'react';
import PropTypes from 'prop-types';
import { getTraitName } from '../../dictionaries';

const TableHeader = (props) => {
  const prevCollocationTraits = props.collocationName
    .split(',')
    .map(getTraitName);
  const collocationName = prevCollocationTraits.join(',');
  const prevCollocationName = prevCollocationTraits.slice(0,-1).join(',');
  const lastTrait = prevCollocationTraits.slice(-1);

  return (
    <tr>
      <th>
        {`Instances (${prevCollocationName}):`}
      </th>
      <th>
      </th>
      <th>
        {`feature ${lastTrait} neighb.:`}
      </th>
      <th>
        {`Instances (${collocationName}):`}
      </th>
    </tr>
  );
}

TableHeader.propTypes = {
  collocationName: PropTypes.string
};

export default TableHeader;
