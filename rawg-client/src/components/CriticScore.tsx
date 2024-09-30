import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

  // const getColor = (score: number) => {
  //   if (score >= 75) {
  //     return "green";
  //   } else if (score >= 50) {
  //     return "yellow";
  //   } else {
  //     return "red";
  //   }
  // };

  return (
    <Badge
      variant="outline"
      colorScheme={color}
      borderRadius="4px"
      paddingX={2}
      border="1px solid"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
