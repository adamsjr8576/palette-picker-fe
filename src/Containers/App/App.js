import React from 'react';
import './App.scss';
import Header from '../../Components/Header/Header';
import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectForm from '../ProjectForm/ProjectForm';

const App = () => {
  return (
    <main className="App">
      <Header />
      <PaletteForm />
      <ProjectForm />
      
    </main>
  );
}

export default App;
