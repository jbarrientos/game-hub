import { Select } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const {genres, error, isLoading} = useGenres();

  return (
    <Select>
      { genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option> ) }
    </Select>
  );
}

export default GenreList