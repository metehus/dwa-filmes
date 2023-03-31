import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title/index';
import { filmes, generos, getImageUrl, seenMovies } from '../filmes';
import { Badge, Box, Card, CardBody, Center, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Assistido } from '../components/CardFilme/Assistido';
import Comments from '../components/Comments';

function Detalhes() {
  const { filmeId } = useParams();

  const filme = filmes.find(f => f.id === parseInt(filmeId))

  if (!filme) {
    return <Title>
      Filme não encontrado
    </Title>
  }

  const genreNames = filme.genre_ids.map(id => generos.find(g => g.id === id).name)

  return (
    <Box bg={`linear-gradient(0deg, transparent, #000000a0), url(${getImageUrl(filme.backdrop_path)})`} bgPosition="center" bgSize="cover">
      <Container maxW="container.xl" pt={2} pb="28">
        <Title text={filme.title}>
          Catálogo de Filmes
        </Title>

        <Card bgColor="#2d3748cc" backdropFilter="blur(10px)">
          <CardBody>
            <Grid templateColumns='5fr 3fr'>
              <GridItem>
                <Text fontSize="4xl" fontWeight="semibold">
                  {filme.title} <Text as="span" fontWeight="normal" color="whiteAlpha.600">({filme.release_date.split('-')[0]})</Text>
                </Text>

                <Flex gap={2} mb={3}>
                  {
                    genreNames.map(name => <Badge colorScheme='purple'>{name}</Badge>)
                  }
                </Flex>

                <Text>
                  {filme.overview}
                </Text>

                <Box mt={5}>
                  <Assistido seen={seenMovies.includes(filme.id)} />
                </Box>

              </GridItem>
              <GridItem>
                <Center>
                  <Image boxShadow="1px 1px 30px 7px #e89aff2e" src={getImageUrl(filme.poster_path)} width="80%" borderRadius={8} />
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