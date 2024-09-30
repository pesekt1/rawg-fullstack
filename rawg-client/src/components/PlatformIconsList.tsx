import { HStack, Icon } from "@chakra-ui/react";

import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaSteam,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
//import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  // const iconMap: { [key: string]: IconType } = {
  //   windows: FaWindows,
  //   xbox: FaXbox,
  //   playstation: FaPlaystation,
  //   apple: FaApple,
  //   linux: FaLinux,
  //   android: FaAndroid,
  //   steam: FaSteam,
  //   iphone: MdPhoneIphone,
  //   nintendo: SiNintendo,
  //   web: BsGlobe,
  // };

  const getIcon = (slug: string) => {
    switch (slug) {
      case "windows":
        return FaWindows;
      case "xbox":
        return FaXbox;
      case "playstation":
        return FaPlaystation;
      case "apple":
        return FaApple;
      case "linux":
        return FaLinux;
      case "android":
        return FaAndroid;
      case "steam":
        return FaSteam;
      case "iphone":
        return MdPhoneIphone;
      case "nintendo":
        return SiNintendo;
      case "web":
        return BsGlobe;
      default:
        return FaWindows;
    }
  };

  return (
    <HStack marginY="1">
      {platforms.map((platform) => (
        <Icon key={platform.id} as={getIcon(platform.slug)} />
        //<Icon key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
