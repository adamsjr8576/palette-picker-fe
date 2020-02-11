import React from 'react';
import './App.scss';
import Header from '../../Components/Header/Header';
import PaletteGenerator from '../../Containers/PaletteGenerator/PaletteGenerator';
import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

const App = () => {
  return (
    <main className="App">
      <PaletteGenerator />
      <section className='section-project'>
        <Header />
        <ProjectForm />
        <PaletteForm />
      </section>
        <ProjectContainer />
    </main>
  );
}

export default App;
