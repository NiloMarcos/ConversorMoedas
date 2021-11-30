import React from 'react';

import './resultsConvert.css';

export default function ResultsConvert({ results }){
  return(
    <div>
      <section className="value-converted">
        <span>R$ {results}</span>
      </section>
    </div>
  );
}