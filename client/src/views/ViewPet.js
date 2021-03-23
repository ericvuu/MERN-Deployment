import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";

const ViewPet = (props) => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/pets/" + props.id)
      .then((res) => setPet(res.data))
      // .catch((err) => navigate("/error"));
  }, [props.id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <h3 className="display-5">Pet Shelter</h3>
          <h3>Details about: {pet.name}</h3>
        </div>
        <div className="col-6">
          <div className="mt-1 ml-5">
            <Link to="/pets">back to home</Link>
          </div>
          <div className="mt-2">
            <DeleteButton
              petId={pet._id}
              petName={pet.name}
              successCallback={() => navigate("/pets")}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p>Pet Type: {pet.type}</p>
        <p>Description: {pet.description}</p>
        <div className="d-flex">
          <p>Skills: </p>
          <div className="ml-5">
            <ul className="list-unstyled">
              <li>{pet.skill_1}</li>
              <li>{pet.skill_2}</li>
              <li>{pet.skill_3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPet;
