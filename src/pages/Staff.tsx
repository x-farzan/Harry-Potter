import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

const Staff = () => {
  const [staff, setStaff] = useState([]);

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
      <Container>
        <Row>
          {staff.length !== 0
            ? staff.map((staff, index) => (
                <CardComponent key={index} character={staff} index={index} />
              ))
            : `Data not available!`}
        </Row>
      </Container>
    </div>
  );
};

export default Staff;
