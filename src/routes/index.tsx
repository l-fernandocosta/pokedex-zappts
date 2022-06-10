import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pokedex } from "../pages/Pokedex";
import { PokemonStats } from "../pages/PokemonStats";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />

      <Route element={<Pokedex />} path="pokedex" />
      <Route element={<PokemonStats />} path="pokedex/:id" />
    </Routes>
  );
}

export { AppRoutes };
