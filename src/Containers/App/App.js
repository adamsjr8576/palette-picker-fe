import React from 'react';
import './App.scss';
import Header from '../../Components/Header/Header';
import PaletteForm from '../PaletteForm/PaletteForm';

const App = () => {
  return (
    <main className="App">
      <Header />
      <PaletteForm />
      
    </main>
  );
}

export default App;
