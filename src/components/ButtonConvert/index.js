import React from 'react';

import './buttonConvert.css';

export default function ButtonConvert({ calculateCurrency }) {
  return (
    <>
      <button className="btn-convert" onClick={() => calculateCurrency()}>Converter</button>
    </>
  );
}