import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';
import { Badge, Box, Card, CardBody, Center, CircularProgress, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Assistido } from '../components/CardFilme/Assistido';
import Comments from '../components/Comments';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMovie, getMovies } from '../filmes';

function Detalhes() {
  const { filmeId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  const [nota, setNota] = useState(null)

  useEffect(() => {
    getMovie(filmeId)
      .then(setMovie)
      .then(() => setIsLoading(false))

    getMovies()
      .then(movies => {
        setNota(movies.find(m => m.id === parseInt(filmeId))?.nota)
      })
  }, [filmeId])



  if (isLoading) {
    return <Center p={8}>
      <CircularProgress isIndeterminate />
    </Center>
  }

  if (!movie?.titulo) {
    return <Title>
      Filme não encontrado
    </Title>
  }

  // const genreNames = filme.genre_ids.map(id => generos.find(g => g.id === id).name)

  return (
    <Box bg={`linear-gradient(0deg, transparent, #000000a0), url(${movie.poster})`} bgPosition="center" bgSize="cover">
      <Container maxW="container.xl" pt={2} pb="28">
        <Title text={movie.titulo}>
          Catálogo de Filmes
        </Title>

        <Card bgColor="#2d3748cc" backdropFilter="blur(10px)">
          <CardBody>
            <Grid templateColumns='5fr 3fr'>
              <GridItem>
                <Text fontSize="4xl" fontWeight="semibold">
                  {movie.titulo} <Text as="span" fontWeight="normal" color="whiteAlpha.600">({movie.ano})</Text>
                </Text>

                <Flex gap={2} mb={3}>
                  <Badge fontSize="1.3em" colorScheme='purple'>{nota}</Badge>
                </Flex>

                <Text>
                  {movie.sinopse}
                </Text>

                <Box mt={5}>
                  <Assistido seen={movie.assistido} id={filmeId} />
                </Box>

              </GridItem>
              <GridItem>
                <Center>
                  <Image boxShadow="1px 1px 30px 7px #e89aff2e" src={movie.poster} width="80%" borderRadius={8} />
                </Center>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>

        <Card bgColor="#2d3748cc" backdropFilter="blur(10px)" mt={10}>
          <CardBody>
            <Text fontSize="lg" fontWeight="semibold">
              Comentários
            </Text>
            <Comments />
          </CardBody>
        </Card>

      </Container>
    </Box>
  )
}

export default Detalhes;