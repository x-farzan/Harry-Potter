import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CardComponent from "../components/CardComponent";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

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
      <Container>
        <Row>
          {students.length !== 0
            ? students.map((student, index) => (
                <CardComponent key={index} character={student} index={index} />
              ))
            : `Data not available!`}
        </Row>
      </Container>
    </div>
  );
};

export default Students;
