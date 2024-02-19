import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardComponent = (props: any) => {
  const navigate = useNavigate();
  const { character, index } = props;

  const handleClick: any = (id: String) => {
    navigate(`/character/${id}`);
  };

  return (
    <Col key={index} xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: "20rem", height: "", marginTop: "3rem" }}>
        <Card.Img
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          variant="top"
          src={
            character.image
              ? character.image
              : `../../public/default-person.jpg`
          }
        />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.gender}</Card.Text>
          <Card.Text>
            {character.dateOfBirth ? character.dateOfBirth : "Unknown"}
          </Card.Text>
          <Button variant="primary" onClick={() => handleClick(character.id)}>
            Wanna know more!!
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
