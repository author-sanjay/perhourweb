import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
<<<<<<< HEAD
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
=======
import Profilepage from "./Components/Profile/ProfilePage";
import Postproject from "./Components/PostProject/Postproject";
>>>>>>> dfc97c6de9daeb81d9db8f503d56ee51fa4c36b4

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
        <Route
          path="/project"
          element={
            <div
              className="flex flex-row"
              style={{ backgroundColor: "#fff", minHeight: "100vh" }}
            >
              <ProjectDetails />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
