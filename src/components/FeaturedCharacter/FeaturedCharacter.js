import React from "react";
import CharacterCard from "components/CharacterCard/CharacterCard";
import { fetchCharacter } from "services/heroes";
import * as Styled from "./styles/StyledFeaturedCharacter";

const FeaturedCharacter = ({ id }) => {
  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCharacter(id);
      setCharacter(res);
    };
    fetchData();
  }, [id]);

  return (
    <Styled.CharacterContent>
      {id ? <CharacterCard character={character} /> : <Styled.EmptyText>Select a character</Styled.EmptyText>}
    </Styled.CharacterContent>
  );
};

export default FeaturedCharacter;
