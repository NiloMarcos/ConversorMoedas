import React from 'react';

import './header.css';

export default function Header({ title }) {
  return (
    <main>
      <div className="div-principal">
        <h3 className="title">{title}</h3>
      </div>
    </main>
  );
}