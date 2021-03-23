import React, { useState, useEffect } from "react";
import PetForm from "../components/PetForm";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const UpdatePet = (props) => {
  const { id } = props;
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [pet, setPet] = useState({});
  const [actionType] = useState("Edit");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/pets/${id}`)
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
  }, [id]);

  const updatePet = (pet) => {
    axios
      .put(`http://localhost:8000/pets/${id}`, pet)
      .then((res) => {
        navigate("/pets");
      })
      .catch((error) => {
        const errorResponse = error.response.data.errors;

        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className="container text-center">
      <div className="container text-left">
        <Link to="/pets">back to home</Link>
      </div>
      <h1>Pet Shelter</h1>
      <h5>Know a pet needing a home?</h5>
      {errors.map((error, index) => (
        <p className="text-danger" key={index}>
          {error}
        </p>
      ))}
      {loaded && (
        <PetForm
          onSubmitProp={updatePet}
          initialName={pet.name}
          initialType={pet.type}
          initialDescription={pet.description}
          initialSkill_1={pet.skill_1}
          initialSkill_2={pet.skill_2}
          initialSkill_3={pet.skill_3}
          actionType={actionType}
        />
      )}
    </div>
  );
};

export default UpdatePet;
