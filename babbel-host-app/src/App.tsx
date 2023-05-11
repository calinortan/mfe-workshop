import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { lazy } from "react";
import "./App.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SuperButton = lazy(() => import("remote_app/Button"));

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <SuperButton />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
