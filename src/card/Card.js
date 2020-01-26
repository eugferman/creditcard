import React from 'react';
import { useState } from 'react';
import './Card.scss';
import logo from './bbva-logo.png';


function Card(){
  const [nombre, setNombre] = useState('Marcus Fenix');
  const [cardNumber, setCardNumber] = useState('1234 1234 1234 1234');
  const [month, setMonth] = useState('12');
  const [year, setYear] = useState('20');
  const [code, setCode] = useState('123');

  const [valueNombre, setValueNombre] = useState ('');
  const [valueCardNumber, setValueCardNumber] = useState ('');
  const [valueMonth, setValueMonth] = useState ('');
  const [valueYear, setValueYear] = useState ('');
  const [valueCode, setValueCode] = useState ('');

  const handleValuesForm = (e) => {
    e.preventDefault();
    setNombre(valueNombre);

    let numeroTarjeta = valueCardNumber.replace(/ /g, "")
    let cardGroup1 = numeroTarjeta.slice(0, 4);
    let cardGroup2 = numeroTarjeta.slice(4, 8);
    let cardGroup3 = numeroTarjeta.slice(8, 12);
    let cardGroup4 = numeroTarjeta.slice(12, 16);
    let cardComplete = cardGroup1+' '+cardGroup2+' '+cardGroup3+' '+cardGroup4;

    setCardNumber(cardComplete);
    setMonth(valueMonth);
    setYear(valueYear);
    setCode(valueCode);

    setValueNombre('');
    setValueCardNumber('');
    setValueMonth('');
    setValueYear('');
    setValueCode('');

  }

  return (
    <div className="main-card">
      <div className="header-card">
        <h1>Credit Card useState</h1>
        <p>React - Advanced hooks</p>
      </div>
      <div className="card">
        <img src={logo} alt="logo"/>
        <p><strong>Titular:</strong> {nombre}</p>
        <p><strong>Número tarjeta:</strong> {cardNumber}</p>
        <p><strong>Fecha caducidad:</strong> {month}/{year}</p>
        <p><strong>Cvv:</strong> {code}</p>
      </div>

      <div className="form-card">
        <form onSubmit={handleValuesForm}>
          <label>Titular:</label>
          <input type="text" className="name-input" maxLength="40" value={valueNombre} onChange={e => setValueNombre(e.target.value)} placeholder="Introduce tu nombre"/><br></br>
          <label>Número de tarjeta:</label>
          <input type="text" className="number-input" maxLength="16" value={valueCardNumber} onChange={e => setValueCardNumber(e.target.value)} placeholder="1234..."/><br></br>
          <label>Mes:</label>
          <input type="number" min="01" max="12" className="month-input" value={valueMonth} onChange={e => setValueMonth(e.target.value)} placeholder="Mes"/>
          <label>Año:</label>
          <input type="number" min="2020" max="2030" className="year-input" value={valueYear} onChange={e => setValueYear(e.target.value)} placeholder="Año"/>
          <label>Cvv:</label>
          <input type="text" className="cvv-input" maxLength="3" value={valueCode} onChange={e => setValueCode(e.target.value)} placeholder="Ver detrás de tarjeta"/><br></br>
          <button type="submit">Añadir Datos</button>
        </form>
      </div>
    </div>
    
  );
}

export default Card;