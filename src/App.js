import './App.css';
import { useGetData } from './hook/useGetData';
import ListDeliveries from './components/ListDeliveries';
import StatusFilter from './components/StatusFilter';
import SortFilter from './components/SortFilter';

function App() {
  // Calling hook where is the call to the API and getting the state
  const {deliveries, updateStatusDelivery, filterDeliveries, sortDeliveries} = useGetData();

  return (
    <div className="App">
      <div>
        <h1>Deliveries App!</h1>
        <div className='filter'>
          <StatusFilter filterDeliveries={filterDeliveries}/>
          <SortFilter sortDeliveries={sortDeliveries}/>
        </div>
        <ListDeliveries deliveries={deliveries} updateStatusDelivery={updateStatusDelivery}/>
      </div>
    </div>
  );
}

export default App;
