import "./App.css";

function App() {
  return (
    <div className="main">
      <h1 className="title">Mini Project 1</h1>

      <div className="box">
        <div className="heading">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            className="react-logo"
          />

          <h2>Rules of JSX</h2>
        </div>

        <ul>
          <li>Must have enclosed JSX in a Root Element</li>

          <li>Close the tags properly</li>

          <li>
            Use className instead of CSS class, as class is a reserved word in
            JS
          </li>

          <li>Use camelCase for attributes</li>

          <li>Use flower braces for JS</li>
        </ul>

        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;
