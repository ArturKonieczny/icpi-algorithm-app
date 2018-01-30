import React from 'react';
import PropTypes from 'prop-types';

const FileInput = (props) => {
  function setFileInput(event) {
    const freader = new FileReader();

    freader.onload = (fileData) => {
      props.setStateItem('inputData', fileData.target.result);
      props.setStateItem('step', 0);
    };

    freader.readAsText(event.target.files[0]);
  }

 function resetInput(event) {
    props.setStateItem('step', -1);
    event.target.value = '';
  }

  return (
    <div>
      <input type="file" onClick={resetInput} onChange={setFileInput}/>
    </div>
  );
}

FileInput.propTypes = {
  setStateItem: PropTypes.func
};

export default FileInput;
