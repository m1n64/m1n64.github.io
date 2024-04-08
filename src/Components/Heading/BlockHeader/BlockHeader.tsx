import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

type BlockHeaderProps = {
    icon: JSX.Element,
    title: string,
}

export const BlockHeader: React.FC<BlockHeaderProps> = ({icon, title}) => {
    return (
        <Flex alignItems="center" bg="accent.100" fontSize={"1.3em"} color={"textAccent.100"} fill={"textAccent.100"} p={2} maxW="max-content" borderRadius={"15px"} marginY={"20px"}>
            <Box as="span" mr={2}>
                {icon}
            </Box>
            <Text as="span" fontWeight="bold" textTransform="uppercase">
                {title}
            </Text>
        </Flex>
    )
}