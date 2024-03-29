import React from "react";
import { updateData } from "../redux/pnrSlice";
import { useSelector } from "react-redux";
// 6845430634
const ResultTable = () => {
	const data = useSelector((state) =>state.pnr.data);
	const tableData= data?.map((status,i)=>{
		console.log(i);
		console.log(status?.seatType?.toUpperCase());
		return 			<tr key={i}>
		<td>{status.currentStatus}</td>
		<td>{status.bookingStatus}</td>
		<td>{status?.seatType?.toUpperCase()}</td>
	</tr>
	})
  return (
    <div className="table-container">
        <h5>Your Results</h5>
        <table className="pnr-table">
		<thead>
			<tr>
				<th>Current Status</th>
				<th>Booking Status</th>
				<th>Seat Type</th>
			</tr>
		</thead>
		<tbody>
{tableData}
		</tbody>
	</table>
    </div>
  );
};

export default ResultTable;
