import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'

export function HeaderLink({ children, to }) {
  return <Link color="whiteAlpha.700" _hover={{ color: 'white' }} as={RouterLink} to={to}>{children}</Link> 
}