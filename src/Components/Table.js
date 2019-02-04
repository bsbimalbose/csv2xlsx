import React from "react";

export default function Table({ tableData }) {
  const { header, tableBody } = tableData;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>{header ? header.map(item => <th>{item}</th>) : null}</tr>
        </thead>
        <tbody>
          {tableBody
            ? tableBody.map(row => (
                <tr>
                  {row.map(cell => (
                    <td>{cell}</td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
