import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9393/deliveries")
    .then((response) => {
        console.log(response.data);
        setDeliveries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Deliveries App!</h1>
        {deliveries.map((delivery)=>{
          return(
            <div key={delivery.id}>
              <h3>Id: {delivery.id}</h3>
              <p>Date: {delivery.creation_date}</p>
              <p>State: {delivery.state}</p>
              <p>Zone: {delivery.zone_id}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
