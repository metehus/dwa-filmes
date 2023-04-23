import React from 'react';
import Title from '../components/Title/index';
import CardFilme from '../components/CardFilme/index';
import { Box, Select, Container, Flex, Input, SimpleGrid, Text, Center } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMovies } from '../filmes';
import { useMemo } from 'react';

function Home() {
    const [movies, setMovies] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [orderBy, setOrderBy] = useState('titulo')

    useEffect(() => {
        getMovies().then(setMovies)
    }, [])

    const filtered = useMemo(() => {
        if (!searchText) {
            return movies
        } else {
            return movies.filter(
                movie => movie.titulo.toLowerCase().includes(searchText.toLowerCase())
            )
        }
    }, [movies, searchText])

    const ordered = useMemo(
        () => filtered?.sort((a, b) => {
            if (orderBy === 'titulo') {
                // se for titulo compara por texto
                return a.titulo.localeCompare(b.titulo)
            } else {
                return a[orderBy] - b[orderBy]
            }
        }),
        [filtered, orderBy]
    )

    return (
        <Container maxW="container.xl">
            <Title text={"Filmes Disponíveis"}>
                Catálogo de Filmes
            </Title>

            <Center>
                <Flex p={2} mb={8} w="100%" direction="column" align="center" maxW={80} gap={3}>
                    <Input
                        size="lg"
                        placeholder='Buscar filme'
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                    <Flex align="center" w="100%">
                        <Text
                            sx={{ width: 140 }}
                            as="span"
                        >
                            Ordenar por
                        </Text>
                        <Select
                            size="sm"
                            value={orderBy}
                            onChange={e => setOrderBy(e.target.value)}
                        >
                            <option value="titulo">Título</option>
                            <option value="ano">Ano</option>
                            <option value="nota">Nota</option>
                        </Select>
                    </Flex>
                </Flex>
            </Center>

            <SimpleGrid columns={3} spacing={4}>
                {ordered?.map((filme, i) => <CardFilme filme={filme} />)}
            </SimpleGrid>
        </Container>
    )
}
export default Home;