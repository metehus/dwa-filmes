import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';
import { Container } from '@chakra-ui/react';

function Home() {
    return (
        <Container maxW="container.xl">
            <Title text={"Filmes Disponíveis"}>
                Catálogo de Filmes
            </Title>
            <Card />
        </Container>
    )
}
export default Home;