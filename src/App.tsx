import React from 'react';
import Logo from './logo.svg';
import { Button } from 'src/components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Hello</Button>
      </header>
    </div>
  );
}

export default App;
