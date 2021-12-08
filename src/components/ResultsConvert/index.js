import React from "react";
import "./resultsConvert.scss";

export default function ResultsConvert({ results }) {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var hour = date.getHours();
  var min = date.getMinutes();
  var formatDateYear = `${day}/${month + 1}/${year}  ${hour}:${min}`;

  return (
    <main className="results">
      {results && (
        <section className="value-converted">
          <h3>Data da consulta</h3>
          <span className="hour-date">{formatDateYear}</span>
          <span>Valor convertido: R$ {results}</span>
        </section>
      )}
    </main>
  );
}
