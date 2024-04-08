import React from "react";
import {Box, Text} from "@chakra-ui/react";
import {Line} from "../../Line/Line.tsx";
import {Location} from "../../../Icons";

type CompositeListProps = {
    name: string,
    additionalInfo?: string
    secondTitle: string,
    location: string,
    mainInfo: string,
}

export const CompositeListElement: React.FC<CompositeListProps> = ({name, additionalInfo, secondTitle, location, mainInfo}) => {
    return (
      <Box marginTop={"10px"}>
          <Box as={"div"} display="flex" fontSize={"1.3em"} fontWeight={"500"}>
              <Text as={"span"} color={"text.100"}>{name} |&nbsp;</Text>
              <Text as={"span"} color={"text.70"}>{additionalInfo}</Text>
          </Box>

          <Box as={"div"} fontSize={"1.2em"}>
              <Text color={"text.50"}>{secondTitle}</Text>
          </Box>

          <Box as={"div"} display="flex" color={"text.70"} fill={"text.70"} fontSize={"1em"}>
              <Location/>
              {location}
          </Box>

          <Text as={"div"} color={"text.100"} className={"pre-lined"} fontSize={"1.2em"} marginY={"15px"}>
              {mainInfo}
          </Text>

          <Line/>
      </Box>
    );
}