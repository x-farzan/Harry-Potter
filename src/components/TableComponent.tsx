import React from "react";

const TableComponent = (props: any) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">Eye Colour</th>
            <th scope="col">Species</th>
            <th scope="col">House</th>
            <th scope="col">Go to Detail Page</th>
            {/* <th scope="col">Last</th>
            <th scope="col">Handle</th> */}
          </tr>
        </thead>
        <tbody>
          {props.houseData.map((student: any, index: any) => (
            <tr key={index} className="">
              <th scope="row">{index + 1}</th>
              <td>
                <div>
                  <img
                    src={
                      student.image
                        ? student.image
                        : `../../public/default-person.jpg`
                    }
                    alt="new"
                    style={{ height: "7vh", width: "3vw" }}
                  />
                </div>
              </td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.eyeColour}</td>
              <td>{student.species}</td>
              <td>{student.house}</td>
              <td>{<button>View Detail</button>}</td>
            </tr>
          ))}
        </tbody>
        ;
      </table>
    </div>
  );
};

export default TableComponent;
