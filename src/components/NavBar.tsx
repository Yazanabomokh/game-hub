import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      {" "}
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
