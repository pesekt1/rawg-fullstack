import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow="hidden"
      borderRadius={10}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.2s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
