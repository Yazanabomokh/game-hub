import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button fontSize="16px" variant="outline">
          Order by: Relevance
          {<BsChevronDown></BsChevronDown>}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner >
          <Menu.Content maxHeight="150px" border="solid white">
            <Menu.Item value="11">1</Menu.Item>
            <Menu.Item value="11">1</Menu.Item>
            <Menu.Item value="11">1</Menu.Item>
            <Menu.Item value="11">1</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
