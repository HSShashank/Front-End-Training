import React from 'react'
import AddEntry from "./Components/AddEntry";
import Entries from "./Components/Entries";
import TotalCalories from "./Components/TotalCalories";

export default function App() {
    return (
      <div className="container">
        <TotalCalories />
        <AddEntry />
        <Entries />
      </div>
    );
  }