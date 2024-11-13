import React from "react";
import "./App.css";
import "./index.css";
import Titlebar from "./Titlebar/Titlebar";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="font-SUIT-Regular flex h-screen flex-col">
      <Titlebar />
      <AppRoutes />
    </div>
  );
}

export default App;