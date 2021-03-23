import { Router, Redirect } from "@reach/router";
import Dashboard from "./views/Dashboard";
import NewPet from "./views/NewPet";
import ViewPet from "./views/ViewPet";
import UpdatePet from "./views/UpdatePet";

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/pets" />
        <NewPet path="/pets/new" />
        <ViewPet path="/pets/:id" />
        <UpdatePet path="/pets/:id/edit" />
        <Redirect from="/" to="/pets" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
