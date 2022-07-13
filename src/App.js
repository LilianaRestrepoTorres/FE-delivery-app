import './App.css';
import { useGetData } from './hook/useGetData';

function App() {
  // Calling hook where is the call to the API and getting the state
  const {deliveries} = useGetData();

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
