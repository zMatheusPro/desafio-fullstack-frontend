import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";

function App() {
  return (
      <BrowserRouter>
        <div id="app">
          <Routes />
        </div>
      </BrowserRouter>
  );
}

export default App;
