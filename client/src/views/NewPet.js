import React, { useState } from "react";
import PetForm from "../components/PetForm";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const NewPet = () => {
  const [errors, setErrors] = useState([]);
  const [actionType] = useState("Add");

  const createPet = (pet) => {
    axios
      .post("http://localhost:8000/pets", pet)
      .then((res) => {
        console.log(res);
        navigate(`/pets`);
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
      <PetForm
        onSubmitProp={createPet}
        initialName=""
        initialType=""
        initialDescription=""
        initialSkill_1=""
        initialSkill_2=""
        initialSkill_3=""
        actionType={actionType}
      />
    </div>
  );
};

export default NewPet;
