import React, { useState, useEffect } from "react";
import "./home.scss";
import api from "../../services/api";
import ButtonConvert from "../../components/ButtonConvert";
import ResultsConvert from "../../components/ResultsConvert";

export default function Home() {
  const [currency, setCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencyValue, setCurrencyValue] = useState("");
  const [valueEntered, setValueEntered] = useState(null);
  const [results, setResults] = useState('');

  useEffect(() => {
    async function getCurrency() {
      const response = await api.get(`all`);

      let arrayCurrency = [];
      Object.keys(response.data).map((key) => {
        arrayCurrency.push({
          currency: key,
          label: key,
          value: key,
        });
      });

      setCurrency(arrayCurrency);
    }
    getCurrency();
  }, []);

  async function calculateCurrency() {
    const response = await api.get(`all/${selectedCurrency}-BRL`);

    let results =
      response.data[selectedCurrency].ask * parseFloat(currencyValue);
    console.log(results);
    setResults(`${results.toFixed(2)}`);
    setValueEntered(valueEntered);
  }

  return (
    <main className="wrapper">
      <div className="currency-selected">
        <section className="section-currency">
          <p>Selecione a moeda na qual quer converter!</p>
          <select
            name="select"
            className="select-currency"
            onChange={(event) => setSelectedCurrency(event.target.value)}
          >
            <option>Selecione a moeda</option>
            {currency.map((item) => {
              return <option value={item.currency}>{item.label}</option>;
            })}
          </select>
        </section>
        <section className="input-value">
          <p>Qual o valor a ser convertido?</p>
          <input
            type="text"
            placeholder="Qual o valor?"
            value={currencyValue}
            onChange={(event) => setCurrencyValue(event.target.value)}
          />
        </section>

        <section className="section-buttons">
          <ButtonConvert calculateCurrency={calculateCurrency} />
        </section>

        <ResultsConvert results={results} />
      </div>
    </main>
  );
}
