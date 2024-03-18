import Dropdown from "react-bootstrap/Dropdown";

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="btn btn-dark"
      >
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Descending</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
