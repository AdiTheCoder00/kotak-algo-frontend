import PriceChart from './components/PriceChart';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <div>
      <h1>Kotak Algo Trading</h1>
      <OrderForm />
      <PriceChart symbol="NSE:RELIANCE" />
    </div>
  );
}
