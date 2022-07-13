import React from "react";
import { useGetData } from "../../hook/useGetData";

function StatusFilter({ filterDeliveries }) {
    const {deliveries} = useGetData();

  return (
    <div>
      <h4>Status Filter</h4>
      <select onChange={(e) => filterDeliveries((e.target.value), deliveries)}>
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="assigned">Assigned</option>
        <option value="in_transit">In Transit</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
}

export default StatusFilter;