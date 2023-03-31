import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';

export default function Footer() {
    return (
        <Box as="footer" bg="black" color="white">
        <Container maxW="container.xl" py={6} as="nav">
          <Flex alignItems="center" gap={4}>
            <Text>
              Chuu Filmes &copy; 2023
            </Text>
            </Flex>
        </Container>
      </Box>
    )
}