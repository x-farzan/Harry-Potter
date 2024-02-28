import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import Search from "../components/Search";

const Staff = () => {
  const [staff, setStaff] = useState<any>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);

  const handleSearch = (e: String): any => {
    const filteredData = staff.filter((character: any) =>
      character.name.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredCharacters(filteredData);
  };

  // UseEffect callback expects void or cleanup functions. Cannot use await here as it is of type Promise
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters/staff`
      );
      setStaff(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Search handleSearch={handleSearch} />
      <Container>
        <Row>
          {staff.length !== 0
            ? filteredCharacters.length !== 0
              ? filteredCharacters.map((character, index) => (
                  <CardComponent
                    key={index}
                    character={character}
                    index={index}
                  />
                ))
              : staff.map((character: any, index: Number) => (
                  <CardComponent
                    key={index}
                    character={character}
                    index={index}
                  />
                ))
            : `Data not available!`}
        </Row>
      </Container>
    </div>
  );
};

export default Staff;
