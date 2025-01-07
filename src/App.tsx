import { useState } from 'react';
import './App.css'

function App() {
  const [cel, setCel] = useState<number>(0);
  const [fen, setFen] = useState<number>(0);

  const handleCelcius = (event) => {
    const {value} = event.target;
    const fern = parseInt(((parseInt(value) * (9/5)) + 32).toString(), 10);
    setCel(value);
    setFen(fern);
  }

  const handleFarenhiet = (event) => {
    const {value} = event.target;
    const celc = parseInt(((parseInt(value) - 32) * 5/9).toString(), 10);
    setFen(value);
    setCel(celc);
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <label>Celcius</label>
    <input name='celcius' value={cel} onChange={handleCelcius}/>
    <br/>
    <label>Farenhiet</label>
    <input name='faren' value={fen} onChange={handleFarenhiet}/>
    </div>
  );
}

export default App
