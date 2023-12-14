import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import PokemonPage from "./components/PokemonPage";
import FormPage from "./components/FormPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <p className="text-center">Hello, Pavel! This is HOME page</p>
            }
          />
          <Route path="/poke" element={<PokemonPage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
