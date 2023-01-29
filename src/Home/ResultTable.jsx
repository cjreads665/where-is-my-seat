import React from "react";

const ResultTable = () => {
  return (
    <div className="table-container">
        <h5>Your Results</h5>
      <table class="GeneratedTable">
        <thead>
          <th>Coach, Seat Number</th>
          <th>Seat type</th>
        </thead>
        <tbody>
          <tr>
            <td>S3,36</td>
            <td>SIDE UPPER</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
