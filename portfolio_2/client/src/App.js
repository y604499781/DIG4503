import NameSearch from "./components/NameSearch";
import AgeSearch from "./components/AgeSearch";
import ReportingArea from "./components/ReportingArea";
import AddPeople from "./components/AddPeople";
import './app.css';

function App() {
  return (
    <div className="App">
      <div class="peopleSearch">
        <h1>People Search</h1>
        <NameSearch/>
        <h2>-----or-----</h2>
        <AgeSearch/>
        <br/>
        <AddPeople/>
        <br/><br/>
        <ReportingArea/>
        <h4>Project for DIG 4503, created by Yi Chen</h4>
      </div>
    </div>
  );
}

export default App;
