import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text, HStack } from "@chakra-ui/react"
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image
      src={getCroppedImageUrl(game.background_image)}
      alt={game.name}
      />
      <CardBody>
        <Heading fontSize="medium">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard