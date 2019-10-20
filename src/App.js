import React from 'react';
import Pie from './components/pie/pie';
import './App.css';

function App() {
  return (
    <div className="App" style = {{display: "flex", justifyContent: "center", height: "100%",width: "100%", alignContent: "center", backgroundColor: "blue", position: "absolute"}}>
      <Pie/>
    </div>
  );
}

export default App;
