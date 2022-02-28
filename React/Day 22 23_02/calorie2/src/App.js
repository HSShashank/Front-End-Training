import AddEntries from "./components/AddEntries";
import Entries from "./components/Entries";
import TotalCalories from "./components/TotalCalories";


function App() {
  return (
    <div className="App m-5 ">
      <TotalCalories />
      <AddEntries/>
      <Entries/>
    </div>
  );
}

export default App;
