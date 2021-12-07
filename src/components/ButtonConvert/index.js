import React from 'react';

import './buttonConvert.scss';

export default function ButtonConvert({ calculateCurrency }) {
  return (
    <>
      <button className="btn-convert" onClick={() => calculateCurrency()}>Converter</button>
    </>
  );
}