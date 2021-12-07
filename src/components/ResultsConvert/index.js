import React from "react";
import "./resultsConvert.scss";

export default function ResultsConvert({ results }) {
  var date = new Date();

  var dia = date.getDate();
  var mes = date.getMonth();
  var ano4 = date.getFullYear();
  var hora = date.getHours();
  var min = date.getMinutes();
  var str_data = `${dia}/${mes + 1}/${ano4}  ${hora}:${min}`;

  return (
    <main className="results">
      {results && (
        <section className="value-converted">
          <h3>Data da consulta</h3>
          <span className="hour-date">{str_data}</span>
          <span>Valor convertido: R$ {results}</span>
        </section>
      )}
    </main>
  );
}
