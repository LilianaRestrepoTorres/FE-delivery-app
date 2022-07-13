import React from "react";

function ListDeliveries({ deliveries }) {
  return (
    <div>
      <h1>List Deliveries</h1>
      {deliveries.map((delivery) => {
        return (
          <div key={delivery.id}>
            <h3>Id: {delivery.id}</h3>
            <p>Date: {delivery.creation_date}</p>
            <p>State: {delivery.state}</p>
            <p>Zone: {delivery.zone_id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListDeliveries;
