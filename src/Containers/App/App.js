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
      <Header />
      <PaletteGenerator />
      <PaletteForm />
      <section className='section-project'>
        <ProjectForm />
        <ProjectContainer />
      </section>
    </main>
  );
}

export default App;
