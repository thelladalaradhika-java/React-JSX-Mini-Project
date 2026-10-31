import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

const id = document.getElementById("root");

const root = createRoot(id);

root.render(<App />);
