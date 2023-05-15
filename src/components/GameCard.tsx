import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card maxW='sm' borderRadius={10} overflow="hidden">
      <Image
      src={game.background_image}
      alt={game.name}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard