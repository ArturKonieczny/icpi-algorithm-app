import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader.jsx';
import TableFooter from './TableFooter.jsx';
import TableRow from './TableRow.jsx';

export default class CollocationTable extends React.Component {
  render() {
    const collocationTraits = this.props.collocationName.split(',');
    const mainComponentName = collocationTraits.slice(0,-1).join(',');
    const newTrait = collocationTraits.slice(-1).pop();
    const tableRows = this.props.prevCollocations[mainComponentName].instances.map((instance, index) => {
      const prevInstance = (typeof instance === 'string') ? [instance] : instance; //hotfix, need to rewrite icpi-algorithm :(

      return <TableRow
              prevInstance={prevInstance}
              collocation={this.props.collocation}
              newTrait={newTrait}
              instances={this.props.collocation.instances}
              icpiTree={this.props.icpiTree}
              key={index}/>
    });

    return (
      <div>
        <table>
          <thead>
            <TableHeader collocationName={this.props.collocationName} />
          </thead>
          <tbody>
            {tableRows}
            <TableFooter collocationName={this.props.collocationName} collocation={this.props.collocation}/>
          </tbody>
        </table>
      </div>
    );
  }
}

CollocationTable.propTypes = {
  collocation: PropTypes.object,
  collocationName: PropTypes.string,
  prevCollocations: PropTypes.object,
  icpiTree: PropTypes.object
};
