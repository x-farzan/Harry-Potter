import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<any>({});

  const getCharacterById = async (id: String) => {
    const response = await axios.get(
      `https://hp-api.onrender.com/api/character/${id}`
    );
    setCharacter(response.data[0]);
  };

  useEffect(() => {
    if (id) {
      getCharacterById(id);
    }
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="container mt-5 p-4">
        {/* Image area */}
        <div className="row">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              src={
                character?.image
                  ? character?.image
                  : `../../public/default-person.jpg`
              }
              className="img-fluid rounded-circle float-start"
              style={{ width: 200, height: 200 }}
            />
          </div>

          {/* Character info table */}
          <div className="col-8">
            <table className="table">
              <tr className="">
                <td>
                  <strong>Name</strong>
                </td>
                <td>{character?.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Specie</strong>
                </td>
                <td>{character?.species}</td>
              </tr>
              <tr>
                <td>
                  <strong>Gender</strong>
                </td>
                <td>{character?.gender}</td>
              </tr>
              <tr>
                <td>
                  <strong>DOB</strong>
                </td>
                <td>
                  {character?.dateOfBirth ? character?.dateOfBirth : "Unknown"}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Wizard</strong>
                </td>
                <td>{character?.wizard ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>
                  <strong>Eye Colour</strong>
                </td>
                <td>{character?.eyeColour}</td>
              </tr>
              <tr>
                <td>
                  <strong>Hair Colour</strong>
                </td>
                <td>{character?.hairColour}</td>
              </tr>
              <tr>
                <td>
                  <strong>Hogwarts Student</strong>
                </td>
                <td>{character?.hogwartsStudent ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>
                  <strong>Hogwarts Staff</strong>
                </td>
                <td>{character?.hogwartsStaff ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>
                  <strong>Alive</strong>
                </td>
                <td>{character?.alive ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>
                  <strong>Real Name</strong>
                </td>
                <td>{character?.actor}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
