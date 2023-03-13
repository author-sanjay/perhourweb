import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Profilepage from "./Components/Profile/ProfilePage";
import Postproject from "./Components/PostProject/Postproject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="flex flex-row"
              style={{ backgroundColor: "#fff", minHeight: "100vh" }}
            >
              {/* <Home /> */}
              {/* <Profilepage/> */}
              <Postproject/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
