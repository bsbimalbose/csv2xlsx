import React, { Component } from "react";
import { downloadExcel } from "./utils";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
class App extends Component {
  state = {
    tableData: {
      header: null,
      tableBody: null
    }
  };
  handleCSVData = data => {
    if (data) {
      const dataArray = data.split(/\r?\n/);
      const header = dataArray[0].split(",");
      const tableBody = dataArray.reduce((accumulator, currentValue, index) => {
        if (index) {
          accumulator.push(currentValue.split(","));
        }
        return accumulator;
      }, []);

      this.setState({
        tableData: {
          header,
          tableBody
        }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Form handleCSVData={this.handleCSVData} />
        <Table tableData={this.state.tableData} />
        {this.state.tableData.header ? (
          <button
            onClick={() => {
              downloadExcel({ ...this.state.tableData });
            }}
          >
            Export xlsx
          </button>
        ) : null}
      </div>
    );
  }
}

export default App;
