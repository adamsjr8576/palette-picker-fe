import React from 'react';
import './App.scss';
import Header from '../../Components/Header/Header';
import PaletteGenerator from '../../Containers/PaletteGenerator/PaletteGenerator';
import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectForm from '../ProjectForm/ProjectForm';

const App = () => {
  return (
    <main className="App">
      <Header />
      <PaletteGenerator />
      <PaletteForm />
      <ProjectForm />
    </main>
  );
}

export default App;
