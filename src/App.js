import React from "react";
import "./App.css";

function App() {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    console.log("Fast refreshing");
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and see changes live.
        </p>
        {val}
        <button onClick={() => setVal(x => x + 1)}>Update State</button>
      </header>
    </div>
  );
}

export default App;
