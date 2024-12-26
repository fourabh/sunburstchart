import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SunburstChart from "./components/SunburstChart ";


const hierarchicalData = {
  name: "Root",
  children: [
    {
      name: "USA",
      value: 100,
      children: [
        { name: "Sales", value: 30 },
        { name: "Exec", value: 20 },
        { name: "Analyst", value: 15 },
        {
          name: "Tech",
          value: 35,
          children: [
            { name: "Dev", value: 12 },
            { name: "Win", value: 8 },
            { name: "Web", value: 15 },
          ],
        },
      ],
    },
    {
      name: "UK",
      value: 90,
      children: [
        { name: "HR", value: 25 },
        { name: "Account", value: 20 },
        {
          name: "Tech",
          value: 45,
          children: [
            { name: "Dev", value: 18 },
            { name: "Win", value: 12 },
            { name: "Test", value: 15 },
          ],
        },
      ],
    },
    {
      name: "India",
      value: 85,
      children: [
        { name: "HR", value: 20 },
        { name: "Account", value: 15 },
        {
          name: "Tech",
          value: 30,
          children: [
            { name: "Dev", value: 12 },
            { name: "Test", value: 18 },
          ],
        },
        { name: "Web", value: 20 },
      ],
    },
    {
      name: "Germany",
      value: 110,
      children: [
        { name: "Manager", value: 25 },
        { name: "Account", value: 20 },
        {
          name: "Tech",
          value: 40,
          children: [
            { name: "Test", value: 10 },
            { name: "Dev", value: 15 },
            { name: "Win", value: 8 },
            { name: "Web", value: 7 },
          ],
        },
        { name: "Marketing", value: 15 },
        { name: "Sales", value: 10 },
      ],
    },
  ],
};

function App() {
  return (
    <>
      <div>
        <SunburstChart data={hierarchicalData} />
      </div>
    </>
  );
}

export default App;
