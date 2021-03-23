import React, {useState , useEffect} from 'react'
import axios from "axios";
import { Link } from "@reach/router";

const Dashboard = () => {

  const [pets, setPets] = useState([])

  useEffect(() => {

    axios.get("http://localhost:8000/pets").then((res) => setPets(res.data))

  }, [])

  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <Link to="/pets/new/">add a pet to the shelter</Link>
      <p>These pets are looking for a good home: </p>

      <table className="table table-dark mt-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.sort((a,b) => {
                if(a.type < b.type) { return -1; }
                if(a.type > b.type) { return 1; }
                return 0;
          }).map((pet, idx) => {
              return (
                <tr key={idx}>
                  <td>{pet.name}</td>
                  <td>{pet.type}</td>
                  <td>
                  <div className="d-inline-block">
                    <Link to={`/pets/${pet._id}`} key={idx}> details</Link>
                  </div>
                  <span className="px-2">|</span>
                  <div className="d-inline-block">
                    <Link to={`/pets/${pet._id}/edit`} key={idx}>
                      edit
                    </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard
