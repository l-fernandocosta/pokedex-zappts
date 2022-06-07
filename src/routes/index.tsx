import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
