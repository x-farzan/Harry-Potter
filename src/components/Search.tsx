import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Search = (props: any) => {
  return (
    <>
      <div className="" style={{ margin: "2% 32% 0 33%" }}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter name here to search ..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={(e) => props.handleSearch(e.target.value)}
          />
          {/* <Button
            variant="outline-secondary"
            id="button-addon2"
            className="bg-black text-white"
          >
            Button
          </Button> */}
        </InputGroup>
      </div>
    </>
  );
};

export default Search;
