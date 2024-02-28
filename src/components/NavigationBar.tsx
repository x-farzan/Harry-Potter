import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="p-3">
        <Container>
          <Navbar.Brand href="#home">HARRY POTTER</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">All</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/staff">Staff</Nav.Link>
            {/* <Nav.Link href="/spells">Spells</Nav.Link> */}
            <Nav.Link href="/houses">Houses</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
