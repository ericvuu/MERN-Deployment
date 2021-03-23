import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  const { petId, petName, successCallback } = props;

  const deletePet = (e) => {
    axios.delete(`http://localhost:8000/pets/${petId}/`).then((res) => {
      successCallback();
    });
  };

  return (
    <div>
      <>
        <button onClick={deletePet} className="btn btn-danger ml-5"> Adopt {petName}  </button>
      </>
    </div>
  );
};

export default DeleteButton;
