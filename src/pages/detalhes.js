import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import { filmes } from '../filmes';

function Detalhes() {
    const { filmeId } = useParams();

    const filme = filmes.find(f => f.id === parseInt(filmeId))

    return (
        <div className='container'>
            <Title>Detalhes</Title>               
            <p>Filme: {filme.title}</p>
            
        </div>
    )
}

export default Detalhes;