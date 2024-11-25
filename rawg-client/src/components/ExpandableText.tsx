import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 300;

  if (!children) return null;

  if (children.length <= LIMIT) {
    return <Text>{children}</Text>;
  }

  return (
    <Text>
      {expanded ? children : `${children.substring(0, LIMIT)}...`}
      <Button
        onClick={() => setExpanded(!expanded)}
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
