import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import SharedLayout from "./components/SharedLayout";
import { Loader } from "@mantine/core";
import Home from "./pages/Home";
import { MantineProvider } from "@mantine/core";

const PokemonPage = lazy(() => import("./pages/PokemonPage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const MarkdownPage = lazy(() => import("./pages/MarkdownPage"));
const TablePage = lazy(() => import("./pages/TablePage"));

const App = () => {
  return (
    <HelmetProvider>
      <MantineProvider>
        <Suspense fallback={<Loader color="violet" />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
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
