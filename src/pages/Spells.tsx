import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Container, Row } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

const Spells = () => {
  const [spells, setSpells] = useState([]);

  // UseEffect callback expects void or cleanup functions. Cannot use await here as it is of type Promise
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/spells`
      );
      setSpells(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          {spells.length !== 0
            ? spells.map((spell, index) => (
                <CardComponent key={index} character={spell} index={index} />
              ))
            : `Data not available!`}
        </Row>
      </Container>
    </div>
  );
};

export default Spells;
