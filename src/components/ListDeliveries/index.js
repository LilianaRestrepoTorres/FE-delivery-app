import React from "react";
import UpdateStateButton from "../UpdateStateButton";

function ListDeliveries({ deliveries, updateStatusDelivery }) {
  
  return (
    <div>
      <h3>List Deliveries</h3>
      {deliveries.map((delivery) => {
        return (
          <div key={delivery.id}>
            <h3>Id: {delivery.id}</h3>
            <p>Date: {delivery.creation_date}</p>
            <p>State: {delivery.state}</p>
            <p>Zone: {delivery.zone_id}</p>
            <UpdateStateButton delivery={delivery} updateStatusDelivery={updateStatusDelivery} />
          </div>
        );
      })}
    </div>
  );
}

export default ListDeliveries;
