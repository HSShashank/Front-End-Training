import React from "react";
import './App.css'
import Card from "./Card";

const App = () => {
  return (
      <>
      <div className="container">
      <Card title="Today's Money" num="$53,000" per=" +55%" logo="task1\1644227965tractor-color-silhouette.svg"/>
      <Card title="Today's Users" num="2,300" per=" +3%" logo="task1\1644227965tractor-color-silhouette.svg"/>
    <Card title="New Clients" num="+3,462" per=" -2%" logo="task1\1644227965tractor-color-silhouette.svg"/>
    <Card title="Sales" num="$103,430" per=" +5%" logo="task1\1644227965tractor-color-silhouette.svg"/>
      </div>
      
      </>
  )
}

export default App