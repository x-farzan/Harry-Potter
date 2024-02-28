import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Search from "../components/Search";

const All = () => {
  const [allCharacters, setAllCharacters] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);

  const handleSearch = (e: String): any => {
    const filteredData = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredCharacters(filteredData);
  };

  // UseEffect callback expects void or cleanup functions. Cannot use await here as it is of type Promise
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters`
      );
      setAllCharacters(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
      <Search handleSearch={handleSearch} />
      <Container>
        <Row>
          {allCharacters.length !== 0
            ? filteredCharacters.length !== 0
              ? filteredCharacters.map((character, index) => (
                  <CardComponent
                    key={index}
                    character={character}
                    index={index}
                  />
                ))
              : allCharacters.map((character, index) => (
                  <CardComponent
                    key={index}
                    character={character}
                    index={index}
                  />
                ))
            : `Data not available!`}
        </Row>
      </Container>
    </>
  );
};

export default All;
