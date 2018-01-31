import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader.jsx';
import TableFooter from './TableFooter.jsx';

export default class CollocationTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <TableHeader collocationName={this.props.collocationName} />
          </thead>
          <tbody>
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
