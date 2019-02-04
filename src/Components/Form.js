import React, { Component } from "react";

export default class Form extends Component {
  handleFileRead = e => {
    const content = this.fileReader.result;
    this.props.handleCSVData(content);
  };

  handleFileChosen = file => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };
  render() {
    return (
      <div>
        <input
          type="file"
          accept=".csv"
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
      </div>
    );
  }
}
