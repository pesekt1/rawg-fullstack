import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) {
    return null;
  }

  const getEmoji = (rating_top: number) => {
    switch (rating_top) {
      case 3:
        return { src: meh, alt: "meh" };
      case 4:
        return { src: thumbsUp, alt: "thumbs up" };
      case 5:
        return { src: bullsEye, alt: "bulls eye" };
      default:
        return null;
    }
  };

  return <Image {...getEmoji(rating_top)} boxSize="25px" />;
};

export default Emoji;
