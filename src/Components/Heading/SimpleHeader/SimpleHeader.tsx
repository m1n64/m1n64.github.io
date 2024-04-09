import React from "react";
import {Box, Text} from "@chakra-ui/react";

type SimpleHeaderProps = {
    text: string
    icon: JSX.Element
    big?: boolean
}

export const SimpleHeader: React.FC<SimpleHeaderProps> = ({text, icon, big}) => {
    const bigText = big ? {fontSize: "1.4em"} : {};
    const boldText = big ? {textTransform: "uppercase"} : {};

    return (
        <Box fill={"textAccent.100"} as="span" display="flex" alignItems="center" marginY={"5px"} {...bigText}>
            {icon}
            {/* @ts-ignore */}
            <Text marginLeft={"5px"} as="span" fontWeight="bold" {...boldText}>{text}</Text>
        </Box>
    )
}