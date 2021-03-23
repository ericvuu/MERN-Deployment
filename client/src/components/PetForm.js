import React, { useState } from "react";
import { Link } from "@reach/router";

const PetForm = (props) => {
  const { initialName, initialType, initialDescription, initialSkill_1, initialSkill_2, initialSkill_3, onSubmitProp, actionType } = props;

  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [description, setDescription] = useState(initialDescription);
  const [skill_1, setSkill_1] = useState(initialSkill_1);
  const [skill_2, setSkill_2] = useState(initialSkill_2);
  const [skill_3, setSkill_3] = useState(initialSkill_3);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      type,
      description,
      skill_1,
      skill_2,
      skill_3,
    });
  };

  return (
    <div className="col-5 mx-auto mt-5">
      <form className="mt-3" onSubmit={onSubmitHandler}>
        <div className="d-flex mt-5">
          <div className="col-6">
            <p className="form-group">
              <label>Pet Name: </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </p>
            <p className="form-group">
              <label>Pet Type: </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={type}
              />
            </p>
            <p className="form-group">
              <label>Pet Description: </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </p>
          </div>
          <div className="col-6">
            <h5>Skills (optional): </h5>
            <p className="form-group">
              <label>Skill 1: </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setSkill_1(e.target.value)}
                value={skill_1}
              />
            </p>
            <p className="form-group">
              <label>Skill 2: </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setSkill_2(e.target.value)}
                value={skill_2}
              />
            </p>
            <p className="form-group">
              <label>Skill 3: </label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setSkill_3(e.target.value)}
                value={skill_3}
              />
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary ml-3">{actionType} Pet</button>
        </div>
      </form>
    </div>
  );
};

export default PetForm;
