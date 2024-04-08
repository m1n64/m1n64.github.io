import React from "react";
import {Box} from "@chakra-ui/react";

type SimpleListProps = {
    children: React.ReactNode
}

export const SimpleList: React.FC<SimpleListProps> = ({children}) => {

    return (
        <Box color="textAccent.50" fontSize={"1.2em"}>
            {children}
        </Box>
    )
}