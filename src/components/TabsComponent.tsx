import React, { useEffect, useState } from "react";

const TabsComponent = () => {
  const [active, setActive] = useState(1);

  // Return styling according to the state
  const style = (active: Number) => {
    return {
      backgroundColor: active === 1 ? "black" : "",
      color: active === 1 ? "white" : "black",
    };
  };
  const houses = [
    {
      index: 1,
      id: "pills-gryffindor-tab",
      name: "Godric Gryffindor",
      style: {
        backgroundColor: active === 1 ? "black" : "",
        color: active === 1 ? "white" : "black",
      },
    },
    {
      index: 2,
      id: "pills-slytherin-tab",
      name: "Salazar Slytherin",
      style: {
        backgroundColor: active === 2 ? "black" : "",
        color: active === 2 ? "white" : "black",
      },
    },
    {
      index: 3,
      id: "pills-ravenclaw-tab",
      name: "Rowena Ravenclaw",
      style: {
        backgroundColor: active === 3 ? "black" : "",
        color: active === 3 ? "white" : "black",
      },
    },
    {
      index: 4,
      id: "pills-hufflepuff-tab",
      name: "Helga Hufflepuff",
      style: {
        backgroundColor: active === 4 ? "black" : "",
        color: active === 4 ? "white" : "black",
      },
    },
  ];

  return (
    <>
      <ul
        className="nav nav-pills mx-5 my-5 d-flex justify-content-between"
        id="pills-tab"
        role="tablist"
      >
        {houses.map((house) => (
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id={house.id}
              type="button"
              style={house.style}
              onClick={() => setActive(house.index)}
            >
              {house.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TabsComponent;
