import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import './dashboard.css';
import api from '../../services/api';
import ButtonConvert from '../../components/ButtonConvert';
import ResultsConvert from '../../components/ResultsConvert';

export default function Dashboard() {
  const [currency, setCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [currencyValue, setCurrencyValue] = useState('');
  const [valueEntered, setValueEntered] = useState(null);
  const [results, setResults] = useState(0);

  useEffect(() => {
    async function getCurrency() {
      const response = await api.get(`all`);

      let arrayCurrency = [];
      Object.keys(response.data).map((key) => {
        arrayCurrency.push({
          currency: key,
          label: key,
          value: key
        })
      })

      setCurrency(arrayCurrency);
    }
    getCurrency();
  }, []);

  async function calculateCurrency() {
    const response = await api.get(`all/${selectedCurrency}-BRL`);

    let results = (response.data[selectedCurrency].ask * parseFloat(currencyValue));
    console.log(results);
    setResults(`${results.toFixed(2)}`);
    setValueEntered(valueEntered);
  }

  return (
    <main>
      <Header title="Conversor de moedas" />

      <div className="moeda-selecionada">
        <section className="section-currency">
          <p>Selecione a moeda!</p>
          <select name="select" className="select-currency" onChange={(event) => setSelectedCurrency(event.target.value)} >
            <option>Selecione a moeda</option>
            {currency.map((item) => {
              return (
                <option value={item.currency}>{item.label}</option>
              );
            })}
          </select>
        </section>
        <section>
          <p>Selecione o valor a ser convertido!</p>
          <input type="text" placeholder="Qual o valor?" value={currencyValue} onChange={(event) => setCurrencyValue(event.target.value)} />
        </section>

        <section className="section-buttons">
          <ButtonConvert
            calculateCurrency={calculateCurrency}
          />
        </section>
      </div>

      <ResultsConvert 
        results={results}
      />
    </main>
  );
}