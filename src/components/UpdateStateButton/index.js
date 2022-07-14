import React from "react";

function UpdateStateButton({delivery, updateStatusDelivery}) {
  return (
    <div>
      {delivery.state !== "delivered" && <p>Update State:</p>}
      {delivery.state === "assigned" && (
        <button onClick={() => updateStatusDelivery(delivery.id, "in_transit")}>
          In Transit
        </button>
      )}
      {delivery.state === "in_transit" && (
        <button onClick={() => updateStatusDelivery(delivery.id, "delivered")}>
          Delivered
        </button>
      )}
    </div>
  );
}

export default UpdateStateButton;
