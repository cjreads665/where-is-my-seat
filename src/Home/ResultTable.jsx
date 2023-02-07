import React from "react";

const ResultTable = () => {
  return (
    <div className="table-container">
        <h5>Your Results</h5>
        <table className="pnr-table">
		<thead>
			<tr>
				<th>Status</th>
				<th>Seat Number</th>
				<th>Seat Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>CONFIRMED</td>
				<td>S3 26</td>
				<td>SIDE LOWER</td>
			</tr>
			<tr>
				<td>CONFIRMED</td>
				<td>S3 26</td>
				<td>SIDE LOWER</td>
			</tr>
			<tr>
				<td>CONFIRMED</td>
				<td>S3 26</td>
				<td>SIDE LOWER</td>
			</tr>
			<tr>
				<td>CONFIRMED</td>
				<td>S3 26</td>
				<td>SIDE LOWER</td>
			</tr>
		</tbody>
	</table>
    </div>
  );
};

export default ResultTable;
