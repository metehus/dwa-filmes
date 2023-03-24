import React from 'react';
import './App.css';
import { Card } from './components/Card';
import { Title } from './components/Title';
import { Menu } from './components/Menu';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Planos } from './pages/planos';
import { Sobre } from './pages/sobre';
import { Detalhes } from './pages/detalhes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planos' element={<Planos />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/detalhes/:filme' element={<Detalhes />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
