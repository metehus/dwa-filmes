importar { Button, Box, Container, Flex, Text, useColorMode } de "@chakra-ui/react";
importar { HeaderLink } de "./HeaderLink";
import { Link } de "react-router-dom";

exportar a função padrão Cabeçalho() {

  useColorMode(). setColorMode('escuro')
  retornar (
    <Caixa as="header" bg="black" color="white">
      <Container maxW="container.xl" py={4} as="nav">
        <Flex alignItems="center" gap={4}>
          <Texto fontWeight="negrito">
            Chuu Filmes
          </Texto>
          <HeaderLink to="/">Início</HeaderLink >
          <HeaderLink to="/planos">Planos</HeaderLink >
          <HeaderLink to="/sobre">Sobre</HeaderLink >
          <Button as={Link} to={'/cadastrar'} mt={0} colorScheme='gray'>Cadastrar</Button >
        </Flexionar>
          
      </Recipiente>
    </Caixa>
  )
}
