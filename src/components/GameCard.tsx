import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root border="solid" borderRadius={11}>
      <Image
        borderTopRadius={8}
        src={getCroppedImageUrl(game.background_image)}
        overflow="hidden"
      ></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          {" "}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="1xl">{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
