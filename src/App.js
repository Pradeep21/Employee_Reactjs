import React from 'react';
import './App.css';
import Rout from './Rout';
import Employees from './Employees';



function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src="/Images/Infrrd.png" alt="" height="70" width="140" />
        <h4>Emplyees Details Page</h4>

      </header>

      <Rout />
      <Employees />

    </div>

  );
}

export default App;
