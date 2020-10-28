import React from "react";
import { Background } from "./Background";

const bgdColor = "#102250";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Background color={bgdColor} />
    </div>
  );
}

export default App;
