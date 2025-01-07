import { useState } from 'react';
import './App.css'

function App() {
  const [cel, setCel] = useState<number>(0);
  const [fen, setFen] = useState<number>(0);

  const handleCelcius = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    const toFern = parseInt(((parseInt(value) * (9/5)) + 32).toString(), 10);
    setCel(parseInt(value));
    setFen(toFern);
  }

  const handleFarenhiet = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    const toCelc = parseInt(((parseInt(value) - 32) * 5/9).toString(), 10);
    setFen(parseInt(value));
    setCel(toCelc);
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
