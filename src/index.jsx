import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactApp, MillionApp } from './virtual';
import Lag from 'react-lag-radar';

const App = () => {
  const [useMillion, setMillion] = useState(true);
  return (
    <div style={{ textAlign: 'center' }}>
      <Lag />
      <p>
        This demo is a benchmark to see how virtualization holds up with
        TanStack Virtual and Million.js vs React. Note that each row contains
        5000 hidden div elements.{' '}
        <a href="https://github.com/aidenybai/million-tanstack-virtual">
          Source Code
        </a>
      </p>
      <button onClick={() => setMillion(!useMillion)} style={{ fontSize: 20 }}>
        Currently using: {useMillion ? 'Million.js' : 'React'}
      </button>
      {useMillion ? <MillionApp /> : <ReactApp />}
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
