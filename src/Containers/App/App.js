import React from 'react';
import './App.scss';
import Header from '../../Components/Header/Header';
import PaletteGenerator from '../../Containers/PaletteGenerator/PaletteGenerator';

const App = () => {
  return (
    <main className="App">
      <Header />
      <PaletteGenerator />
    </main>
  );
}

export default App;
