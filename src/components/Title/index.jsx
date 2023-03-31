import { Flex, Text } from "@chakra-ui/react";
import "./title.css";

export default function Title({children, text}) {
    return (
        <Flex alignItems="center" direction="column" pt={4} pb={6}>
            <Text fontSize="4xl">{children}</Text>
            <Text fontSize="xl" color="whiteAlpha.600">{text}</Text>
        </Flex>
    )
}