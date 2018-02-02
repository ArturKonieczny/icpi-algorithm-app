import React from 'react';
import PropTypes from 'prop-types';
import { getTraitName } from '../../dictionaries';

const TableFooter = (props) => {
  const traitPrev = props.collocationName.split(',').map((trait, index) => {
    return (
      <p key={index}>{`Feature ${getTraitName(trait)}: ${props.collocation[trait]}`}</p>
    );
  });


  return (
    <tr>
      <td className='text-vis-cell'>
      </td>
      <td className='text-vis-cell_small'>
      </td>
      <td className='text-vis-cell'>
      </td>
      <td className='text-vis-cell'>
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
