import { MinusIcon } from "@chakra-ui/icons";
import { Box, Button, Tag, Td, Tr } from "@chakra-ui/react";
import { Collection } from "query/collections";
import { Dispatch, SetStateAction } from "react";

export const AttributeTypeRow = ({
  item,
  setAttributeTypes,
}: {
  item: Collection["nftCollectionData"]["attributeTypes"][0];
  setAttributeTypes: Dispatch<
    SetStateAction<Collection["nftCollectionData"]["attributeTypes"]>
  >;
}) => {
  return (
    <Tr>
      <Td>{item.name}</Td>
      <Td>
        <Box display="flex" gap={1} flexWrap={'wrap'}>
          {item.permittedValues.map((val, idx) => (
            <Tag key={idx}>{val}</Tag>
          ))}
        </Box>
      </Td>
      <Td>
        <Button
          onClick={() => {
            setAttributeTypes((old) =>
              old.filter((at) => at.name !== item.name)
            );
          }}
          size={"sm"}
          colorScheme="red"
        >
          <MinusIcon />
        </Button>
      </Td>
    </Tr>
  );
};