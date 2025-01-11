import { useState } from "react";
import HelloWorld from "./components/helloWorld.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld name="Movers App New"></HelloWorld>
    </>
  );
}

export default App;
