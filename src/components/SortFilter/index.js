import React from "react";

function SortFilter({sortDeliveries}) {
  

  return (
    <div>
      <h4>Sort Filter</h4>
      <select onChange={(e) => sortDeliveries(e.target.value)}>
        <option value="ascendent">Ascendent</option>
        <option value="descendent">Descendent</option>
      </select>
    </div>
  );
}

export default SortFilter;
