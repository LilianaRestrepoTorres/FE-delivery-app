import './App.css';
import { useGetData } from './hook/useGetData';
import ListDeliveries from './components/ListDeliveries';
import StatusFilter from './components/StatusFilter';

function App() {
  // Calling hook where is the call to the API and getting the state
  const {deliveries, filterDeliveries} = useGetData();

  return (
    <div className="App">
      <div>
        <h1>Deliveries App!</h1>
        <StatusFilter filterDeliveries={filterDeliveries}/>
        <ListDeliveries deliveries={deliveries}/>
      </div>
    </div>
  );
}

export default App;
