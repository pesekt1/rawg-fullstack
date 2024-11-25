import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router";
import useGameQueryStore from "../store";

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((state) => state.reset);

  return (
    <HStack justifyContent="space-between" padding={3}>
      <Link to="/" onClick={resetGameQuery}>
        <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
