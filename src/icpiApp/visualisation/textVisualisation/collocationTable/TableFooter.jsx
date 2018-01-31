import React from 'react';
import PropTypes from 'prop-types';

const TableFooter = (props) => {
  const traitPrev = props.collocationName.split(',').map((trait, index) => {
    return (
      <p key={index}>{`Feature ${trait}: ${props.collocation[trait]}`}</p>
    );
  });


  return (
    <tr>
      <td>
      </td>
      <td>
      </td>
      <td>
      </td>
      <td>
        {traitPrev}
        <p>{`prev.: ${props.collocation.prev}`}</p>
      </td>
    </tr>
  );
}

TableFooter.propTypes = {
  collocationName: PropTypes.string,
  collocation: PropTypes.object
};

export default TableFooter;
