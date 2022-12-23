import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <div className="bg-color">
      <div>
        <NavBar />
      </div>
      <TextArea />
    </div>
  );
}

export default App;
