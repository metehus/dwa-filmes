import React from 'react';
import Title from '../components/Title/index';
import { Button, Card, CardBody, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

function Planos() {
  return (
    <Container maxW="container.xl">
      <Title>
        Sobre
      </Title>

      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        <Plan title="Plano A" price={9.99} description="Nada de mais" />
        <Plan title="Plano B" price={14.99} description="Nada de mais mesmo" />
        <Plan title="Plano C" price={24.99} description="Mesma coisa dos outros planos" />
      </Grid>

    </Container>
  )
}

function Plan({ title, price, description }) {
  return <GridItem>
  <Card variant="elevated" mb={6}>
    <CardBody>
      <Flex direction="column" alignItems="center">
         <Text fontSize="3xl" fontWeight="bold">{title}</Text>
         <Text fontSize="lg">R$ {price}</Text>
         <Text mt={1} color="whiteAlpha.600">{description}</Text>

         <Button mt={5} colorScheme='purple'>ASSINAR</Button>
      </Flex>
    </CardBody>
  </Card>
</GridItem>
}

export default Planos;