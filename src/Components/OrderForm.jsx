// src/components/OrderForm.jsx
import React, { useState } from 'react';
import api from '../services/api';

export default function OrderForm() {
  const [symbol, setSymbol] = useState('');
  const [qty, setQty] = useState(0);
  const [side, setSide] = useState('BUY');

  const placeOrder = async () => {
    const resp = await api.post('/order', { symbol, qty, side, orderType: 'MARKET' });
    console.log(resp.data);
  };

  return (
    <div>
      <input value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="Symbol" />
      <input type="number" value={qty} onChange={e => setQty(e.target.value)} placeholder="Quantity" />
      <select value={side} onChange={e => setSide(e.target.value)}>
        <option>BUY</option>
        <option>SELL</option>
      </select>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}