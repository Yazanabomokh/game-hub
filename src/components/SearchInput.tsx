import { Input, InputAddon, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SeartchInput = () => {
  return (
    <>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      ></Input>
    </>
  );
};

export default SeartchInput;
