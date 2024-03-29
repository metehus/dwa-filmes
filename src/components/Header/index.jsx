import { Button, Box, Container, Flex, Text, useColorMode } from "@chakra-ui/react";
import { HeaderLink } from "./HeaderLink";
import { Link, useMatch } from "react-router-dom";

export default function Header() {

  const isCadastrar = useMatch('/cadastrar');

  useColorMode().setColorMode('dark')
  return (
    <Box as="header" bg="black" color="white">
      <Container maxW="container.xl" py={4} as="nav">
        <Flex alignItems="center" gap={4}>
          <Text fontWeight="bold">
            Chuu Filmes
          </Text>
          <HeaderLink to="/">Início</HeaderLink>
          <HeaderLink to="/planos">Planos</HeaderLink>
          <HeaderLink to="/sobre">Sobre</HeaderLink>
          {isCadastrar ? null : <Button as={Link} to={`/cadastrar`} mt={0} colorScheme='gray'>Cadastrar</Button>}
        </Flex>
          
      </Container>
    </Box>
  )
}
