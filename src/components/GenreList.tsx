import { List, ListItem, Image, HStack, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const {data, isLoading, error} = useGenres();

  if(error) return null;

  if(isLoading) return <Spinner  />



  return (
    <>
      <Heading fontSize='2xl' textAlign='left' marginBottom={3}>Genres</Heading>
      <List>
        { data.map((genre) => <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
            objectFit='cover'
            src={getCroppedImageUrl(genre.image_background)}
            boxSize="32px"
            borderRadius={5}/>
            <Button textAlign='left' whiteSpace='normal' fontSize='sm'
            fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
            onClick={() => onSelectGenre(genre)}
            variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem> ) }
      </List>
    </>

  );
}

export default GenreList