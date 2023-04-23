import { Button, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Assistido } from "./Assistido";

export default function CardFilme({ filme }) {
  return (

    <Card>
      <CardBody>
        <Flex direction="column" alignItems="center">
          <Link to={`/detalhes/${filme.id}`}>
            <Image src={filme.poster} alt={filme.title} borderRadius={5} />
          </Link>

          <Text mt={5} mb={3} fontSize="xl" fontWeight="bold" color="purple.300" noOfLines={1}>{filme.titulo} ({filme.ano}) </Text>

          <p><b>Nota</b> {filme.nota}</p>
          <Assistido
            seen={filme.assistido}
            id={filme.id}
          />

        </Flex>
      </CardBody>
    </Card>
  )
}