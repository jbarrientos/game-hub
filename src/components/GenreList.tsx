import { List, ListItem, Image, HStack, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const {data, isLoading, error} = useGenres();

  if(error) return null;

  if(isLoading) return <Spinner  />



  return (
    <List>
      { data.map((genre) => <ListItem key={genre.id} paddingY="5px">
        <HStack>
          <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize="32px"
          borderRadius={5}/>
          <Button fontSize='sm'
          onClick={() => onSelectGenre(genre)}
          variant="link">
            {genre.name}
          </Button>
        </HStack>
      </ListItem> ) }
    </List>
  );
}

export default GenreList