import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CardComponent from "../components/CardComponent";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import Search from "../components/Search";

const Students = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);

  const handleSearch = (e: String): any => {
    const filteredData = students.filter((character: any) =>
      character.name.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredCharacters(filteredData);
  };

  // UseEffect callback expects void or cleanup functions. Cannot use await here as it is of type Promise
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters/students`
      );
      setStudents(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Search handleSearch={handleSearch} />
      <Container>
        <Row>
          {students.length !== 0
            ? filteredCharacters.length !== 0
              ? filteredCharacters.map((character, index) => (
                  <CardComponent
                    key={index}
                    character={character}
                    index={index}
                  />
                ))
              : students.map((character, index) => (
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

export default Students;
