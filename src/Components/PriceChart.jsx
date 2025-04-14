// src/components/PriceChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import React, { useEffect, useState } from 'react';
import socket from '../services/marketSocket';

export default function PriceChart({ symbol }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.emit('subscribe', symbol);
    socket.on('quote', quote => {
      setData(prev => [...prev.slice(-50), { time: quote.t, price: quote.p }]);
    });
    return () => socket.off('quote');
  }, [symbol]);

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line dataKey="price" dot={false} />
    </LineChart>
  );
}