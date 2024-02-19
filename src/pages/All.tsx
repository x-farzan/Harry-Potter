import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

const All = () => {
  const [allCharacters, setAllCharacters] = useState<any[]>([]);

  // UseEffect callback expects void or cleanup functions. Cannot use await here as it is of type Promise
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters`
      );
      setAllCharacters(response.data);
      console.log(`logging characters >>>>>>>>> `, allCharacters);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          {allCharacters.length !== 0
            ? allCharacters.map((character, index) => (
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
