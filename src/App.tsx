import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import SharedLayout from "./components/SharedLayout";
import Loader from "./components/Loader";
import { MantineProvider } from "@mantine/core";

const PokemonPage = lazy(() => import("./components/PokemonPage"));
const FormPage = lazy(() => import("./components/FormPage"));
const MarkdownPage = lazy(() => import("./components/MarkdownPage"));
const TablePage = lazy(() => import("./components/TablePage"));

const App = () => {
  return (
    <HelmetProvider>
      <MantineProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <>
                    <Helmet>
                      <title>Home</title>
                    </Helmet>
                    <p className="text-center">
                      Hello, Pavel! This is HOME page
                    </p>
                  </>
                }
              />
              <Route path="/poke" element={<PokemonPage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/markdown" element={<MarkdownPage />} />
              <Route path="/table" element={<TablePage />} />
            </Route>
          </Routes>
        </Suspense>
      </MantineProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </HelmetProvider>
  );
};

export default App;
