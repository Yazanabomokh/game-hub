import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "-release", lable: "Release date" },
    { value: "metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];

  const currentSortedOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button fontSize="16px" variant="outline">
          {currentSortedOrder ? currentSortedOrder.lable : "Relevance"}
          {<BsChevronDown></BsChevronDown>}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content maxHeight="150px" border="solid white">
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.lable}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
