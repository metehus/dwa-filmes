import React from 'react';
import Title from '../components/Title/index';
import CardFilme from '../components/CardFilme/index';
import { Container, SimpleGrid } from '@chakra-ui/react';
import {filmes} from '../filmes.js'

function Home() {
    return (
        <Container maxW="container.xl">
            <Title text={"Filmes Disponíveis"}>
                Catálogo de Filmes
            </Title>
            <SimpleGrid columns={4} spacing={4}>
                {filmes.map((filme, i) => <CardFilme filme={filme} />)}
            </SimpleGrid>
        </Container>
    )
}
export default Home;