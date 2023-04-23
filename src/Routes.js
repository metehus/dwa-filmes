import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import Cadastrar from './pages/cadastrar';

export default function Routes() {
    return (
      <ReactRoutes>
        <Route path='/' element={<Home />} />
        <Route path='planos' element={<Planos />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='detalhes/:filmeId' element={<Detalhes />} />
        <Route path='cadastrar' element={<Cadastrar />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </ReactRoutes>
    );
  }
