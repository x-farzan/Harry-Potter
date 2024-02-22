import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import TableComponent from "./TableComponent";

const TabsComponent = () => {
  const [active, setActive] = useState(1);
  const [house, setHouse] = useState(`gryffindor`);
  const [houseData, setHouseData] = useState([]);
  const houses = [
    {
      index: 1,
      id: "pills-gryffindor-tab",
      name: "Godric Gryffindor",
      houseName: "gryffindor",
      style: {
        backgroundColor: active === 1 ? "black" : "",
        color: active === 1 ? "white" : "black",
      },
    },
    {
      index: 2,
      id: "pills-slytherin-tab",
      name: "Salazar Slytherin",
      houseName: "slytherin",
      style: {
        backgroundColor: active === 2 ? "black" : "",
        color: active === 2 ? "white" : "black",
      },
    },
    {
      index: 3,
      id: "pills-ravenclaw-tab",
      name: "Rowena Ravenclaw",
      houseName: "ravenclaw",
      style: {
        backgroundColor: active === 3 ? "black" : "",
        color: active === 3 ? "white" : "black",
      },
    },
    {
      index: 4,
      id: "pills-hufflepuff-tab",
      name: "Helga Hufflepuff",
      houseName: "hufflepuff",
      style: {
        backgroundColor: active === 4 ? "black" : "",
        color: active === 4 ? "white" : "black",
      },
    },
  ];

  const handleTabClick = (house: any) => {
    setHouse(house.houseName);
    setActive(house.index);
  };

  const fetchHouse = async () => {
    const response = await axios.get(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );
    setHouseData(response.data);
    console.log(houseData);
  };

  useEffect(() => {
    fetchHouse();
  }, [active]);

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
              name={house.name}
              type="button"
              style={house.style}
              onClick={() => handleTabClick(house)}
            >
              {house.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Listing data-rows below */}
      {<TableComponent houseData={houseData} />}
    </>
  );
};

export default TabsComponent;
