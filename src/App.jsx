import { BrowserRouter, Route, Routes } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { WebDevelopmentPage } from "./pages/WebDevelopmentPage";
import MainLayout from "./layouts/MainLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="web-development" element={<WebDevelopmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
