import React from 'react';
import PropTypes from 'prop-types';

export default class FileInput extends React.Component {
  constructor(props){
    super(props);
    this.setFileInput = this.setFileInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  setFileInput(event) {
    const freader = new FileReader();

    freader.onload = (fileData) => {
      this.props.setStateItem('inputData', fileData.target.result);
      this.props.setStateItem('step', 0);
    };

    freader.readAsText(event.target.files[0]);
  }

  resetInput(event) {
    this.props.setStateItem('step', -1);
    event.target.value = '';
  }

  render() {
    return (
      <div>
        <input type="file" onClick={this.resetInput} onChange={this.setFileInput}/>
      </div>
    );
  }
}

FileInput.propTypes = {
  setStateItem: PropTypes.func
};
