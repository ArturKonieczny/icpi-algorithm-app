import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = (props) => {
  const prevCollocationTraits = props.collocationName.split(',');
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
        {`Instances (${props.collocationName}):`}
      </th>
    </tr>
  );
}

TableHeader.propTypes = {
  collocationName: PropTypes.string
};

export default TableHeader;
