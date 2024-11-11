import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Release Date", value: "-released" },
    { label: "Average Rating", value: "-rating" },
    { label: "Name", value: "name" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Date Added", value: "-added" },
  ];

  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  const selectedSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {selectedSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
