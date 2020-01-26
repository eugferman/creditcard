import React from 'react';
import { useState, useEffect } from 'react';
import './Card2.scss';
import logo from './bbva-logo.png';


function Card2(){
  const [nombre, setNombre] = useState('aaaaaaaaaaa');
  const [cardNumber, setCardNumber] = useState('#### #### #### ####');
  const [month, setMonth] = useState('##');
  const [year, setYear] = useState('##');
  const [code, setCode] = useState('###');

  const [valueNombre, setValueNombre] = useState ('');
  const [valueCardNumber, setValueCardNumber] = useState ('');
  const [valueMonth, setValueMonth] = useState ('');
  const [valueYear, setValueYear] = useState ('');
  const [valueCode, setValueCode] = useState ('');

  useEffect(() => {
    setCode(valueCode);
    setNombre(valueNombre);
    
    if(valueMonth.length === 1){
      let addZero = '0' + valueMonth;
      setMonth(addZero);
    } else {
      setMonth(valueMonth)
    }
    
    setYear(valueYear);
    let numeroTarjeta = valueCardNumber.replace(/ /g, "")
    let cardGroup1 = numeroTarjeta.slice(0, 4);
    let cardGroup2 = numeroTarjeta.slice(4, 8);
    let cardGroup3 = numeroTarjeta.slice(8, 12);
    let cardGroup4 = numeroTarjeta.slice(12, 16);
    let cardComplete = cardGroup1+' '+cardGroup2+' '+cardGroup3+' '+cardGroup4;

    setCardNumber(cardComplete);
    
  }, [valueCardNumber, valueCode, valueMonth, valueNombre, valueYear])


  return (
    <div className="main-card">
      <div className="header-card">
        <h1>Credit Card useEffect</h1>
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
        <form>
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

export default Card2;