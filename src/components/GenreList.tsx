import useGenres from "@/hooks/UseGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
