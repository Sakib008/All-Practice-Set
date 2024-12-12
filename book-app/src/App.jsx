import { Route, Routes } from "react-router-dom";


import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { Favorite } from "./Pages/Favorite";
import { Read } from "./Pages/Read";
import { Profile } from "./Pages/Profile";
import { RequireAuth } from "./Components/RequireAuth";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/read" element={<Read />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
