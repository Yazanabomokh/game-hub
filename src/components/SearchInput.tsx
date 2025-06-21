import { Input, InputAddon, InputElement, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}
const SeartchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      ></Input>
    </form>
  );
};

export default SeartchInput;
