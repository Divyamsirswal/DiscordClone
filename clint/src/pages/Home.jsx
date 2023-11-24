// Import necessary components
import React from "react";
import NavBar from "../components/NavBar";
import { Dashboard } from "./Dashboard";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Dashboard />
    </div>
  );
}
