import React, {useState} from 'react'
import Input from './Components/Input';
import RgbText from './Components/RgbText';
import './styles/App.css'

function App() {

  const [stateHex, setStateHex] = useState('');
  const [stateRgb, setStateRgb] = useState('Тут будет RGB');
  const [color, setColor] = useState('#a2c8db');

  const handleChange = (e) => {
    setStateHex(e.target.value);
    const hexRegex = /^#[A-Fa-f0-9]{6}$/;
    if (hexRegex.test(e.target.value)) {
      hexToRgb(e.target.value);
      setColor(e.target.value);
    } else {
      setStateRgb('HEX error');
    }

    if(e.target.value === '') {
      setStateRgb('');
    }
  }

  const hexToRgb = (hex) => {
    let numberRgb = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
                    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16))
    let result = "rgb(" + numberRgb + ")";
    setStateRgb(result) 
 }

  return (
    <div className="app" style={{backgroundColor: color}}>
      <div className="container">
        <Input state={stateHex} handleChange={handleChange}/>
        <RgbText state={stateRgb} handleChange={handleChange}/>
      </div>
    </div>
  );
}

export default App;
