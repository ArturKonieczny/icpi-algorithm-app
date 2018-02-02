import React from 'react';
import PropTypes from 'prop-types';
import { getTraitName } from '../../dictionaries';

const TableFooter = (props) => {
  const traitPrev = props.collocationName.split(',').map((trait, index) => {
    return (
      <div className='table-entry' key={index}>{`Feature ${getTraitName(trait)}: ${props.collocation[trait]}`}</div>
    );
  });


  return (
    <tr>
      <td className='text-vis-cell'>
      </td>
      <td className='text-vis-cell-small'>
      </td>
      <td className='text-vis-cell'>
      </td>
      <td className='text-vis-cell'>
        {traitPrev}
        <hr />
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
