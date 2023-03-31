import "./card.css";
import Comments from '../Comments/index';
import { filmes, getImageUrl, seenMovies } from "../../filmes";
import { Button, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Assistido } from "./Assistido";

export default function CardFilme({ filme }) {
  return (

    <Card>
      <CardBody>
        <Flex direction="column" alignItems="center">
          <Link to={`/detalhes/${filme.id}`}>
            <Image src={getImageUrl(filme.poster_path)} alt={filme.title} borderRadius={5} />
          </Link>
          
            <Text mt={5} mb={3} fontSize="xl" fontWeight="bold" color="purple.300" noOfLines={1}>{filme.title} ({new Date(filme.release_date).getFullYear()}) </Text>
            <Text w="100%" letterSpacing={1.3} textTransform="uppercase" fontWeight="bold" fontSize="xs" color="whiteAlpha.500">Sinopse</Text>
            <Text mt={2} mb={4} noOfLines={5}>{filme.overview}</Text>

            <p><b>Nota</b> {filme.vote_average}</p>
            <Assistido
              seen={seenMovies.includes(filme.id)}
            />
            <Button as={Link} to={`/detalhes/${filme.id}`} mt={5} colorScheme='purple'>DETALHES</Button>
          {/* <Comments filme={filme.nome} /> */}
        </Flex>
      </CardBody>
    </Card>
  )
}