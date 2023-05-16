import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "./PlatformSelector";

interface Props{
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre } : Props) => {

  const {data: games, error, isLoading} = useGames(selectedGenre);

  const skeletons = [1,2,3,4,5,6];

  return (
    <>
      { error && <Text colorScheme="red">{error}</Text>}

      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}}
      padding={10}
      spacing={3}>
        { isLoading
        ?
        skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)
        :
        games.map((game) => <GameCardContainer key={game.id}> <GameCard game={game} /> </GameCardContainer>)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid