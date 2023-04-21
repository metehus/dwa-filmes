import React from 'react';
import Title from '../components/Title/index';
import { Card, CardBody, Container, Grid, GridItem } from '@chakra-ui/react';

function Login() {

  return (
    <Container maxW="container.xl">
      <Title text={"Mais informações sobre o site"}>
        Login
      </Title>

      <Card variant="elevated" mb={6}>
        <CardBody>
          <Grid templateColumns='5fr 3fr'>
            <GridItem>
              texto
            </GridItem>
            <GridItem>
              Imagem
            </GridItem>
          </Grid>
        </CardBody>
      </Card>

    </Container>
  )
}

export default Login;
