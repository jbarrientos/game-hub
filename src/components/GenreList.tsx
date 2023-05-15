import { Select } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const {data} = useGenres();

  return (
    <Select>
      { data.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option> ) }
    </Select>
  );
}

export default GenreList