import React from "react";
import Layout from "components/Layout/Layout";
import CharacterGrid from "components/CharacterGrid/CharacterGrid";
import FeaturedCharacter from "components/FeaturedCharacter/FeaturedCharacter";
import { ReactComponent as SearchIcon } from "icons/searchIcon.svg";
import { heroes } from "data/heroList";
import * as Styled from "./styles/StyledSearch";

const Search = () => {
  const [selectedCharacterId, setSelectedCharacterId] = React.useState(null);
  const searchRef = React.useRef();

  return (
    <Layout>
      <Styled.GridColumn>
        <CharacterGrid characters={heroes} handleSelectCharacter={setSelectedCharacterId} />
      </Styled.GridColumn>
      <Styled.FeaturedColumn fixed>
        <Styled.SearchInput ref={searchRef} type="search" placeholder="Find a Hero" />
        <SearchIcon onClick={() => searchRef.current.focus()} />
        <Styled.LineAccent />
        <FeaturedCharacter id={selectedCharacterId} />
      </Styled.FeaturedColumn>
    </Layout>
  );
};

export default Search;
