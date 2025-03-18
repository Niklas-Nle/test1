"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [zahl, setZahl] = useState(0);
  const [pDiddyCount, setPDiddyCount] = useState(0); // Anzahl der gekauften Upgrades
  const [drake, setDrakeCounter] = useState(0);

  function plus1() {
    setZahl((prev) => Math.round((prev + 1) * 10) / 10);
  }

  function minus1() {
    setZahl((prev) => Math.round((prev - 1) * 10) / 10);
  }

  function reset1() {
    setZahl(0);
    setPDiddyCount(0);
    setDrakeCounter(0);
  }

  function Pdiddy() {
    if (zahl >= 10) {
      setZahl((prev) => Math.round((prev - 10) * 10) / 10);
      setPDiddyCount((prev) => prev + 1); // Erhöht die Anzahl der Upgrades
    }
  }
  function Drake() {
    if (zahl >= 100) {
      setZahl((prev) => Math.round((prev - 100) * 10) / 10);
      setDrakeCounter((prev) => prev + 1); // Erhöht die Anzahl der Upgrades
    }
  }
  useEffect(() => {
    if (pDiddyCount > 0) {
      const interval = setInterval(() => {
        setZahl((prev) => Math.round((prev + 0.1 * pDiddyCount) * 10) / 10);
      }, 1000);


      return () => clearInterval(interval);
    }
  }, [pDiddyCount]); // Jetzt abhängig von `pDiddyCount`
  useEffect(() => {
    if (drake > 0) {
      const interval = setInterval(() => {
        setZahl((prev) => Math.round((prev + 1.2 * drake) * 10) / 10);
      }, 1000);


      return () => clearInterval(interval);
    }
  }, [drake]); // Jetzt abhängig von `pDiddyCount`

  return (
    <div>
      <h1>Aura Clicker</h1>
      <p>Aura: {zahl.toFixed(1)}</p> 
      <button onClick={plus1}>Plus Aura</button><br></br>
      <p>P Diddy Upgrades: {pDiddyCount}</p>
      <button onClick={Pdiddy}>P Diddy (-10 Aura, +0.1/s pro Upgrade)</button>
      <p>Drake Upgrades: {drake}</p>
      <button onClick={Drake}>Drake (-100 Aura, +1,2/s pro Upgrade)</button>
      <footer>
        <br></br><br></br><br></br>
        <button onClick={minus1}>Minus Aura</button><br></br>
        <button onClick={reset1}>Reset Aura</button>
      </footer>
    </div>
  );
}
