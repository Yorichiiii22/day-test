import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <a
        style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
        href="#"
      >
        scroll up/down ...
      </a>
    </div>
  </>
);
