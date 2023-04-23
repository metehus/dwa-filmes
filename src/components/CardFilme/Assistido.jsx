import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Assistido({ seen, id }) {
  return <Button as={Link} to={`/detalhes/${id}`} mt={5} colorScheme='purple'>
    {
      seen ? 'Assistir' : 'Assistir novamente'
    }
  </Button>
}