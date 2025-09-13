import { BrowserRouter, Route, Routes } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { UiUxDesignPage } from "./pages/UiUxDesignPage";
import { WebDevelopmentPage } from "./pages/WebDevelopmentPage";
import { WebScrapingDataServicesPage } from "./pages/WebScrapingDataServicesPage";
import { AiMachineLearningPage } from "./pages/AiMachineLearningPage";
import { MobileAppDevelopmentPage } from "./pages/MobileAppDevelopmentPage";
import { AutomationServicesPage } from "./pages/AutomationServicesPage";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/general/ScrollToTop";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="web-scraping-data-services"
            element={<WebScrapingDataServicesPage />}
          />
          <Route path="web-development" element={<WebDevelopmentPage />} />
          <Route
            path="mobile-app-development"
            element={<MobileAppDevelopmentPage />}
          />
          <Route
            path="ai-and-machine-learning"
            element={<AiMachineLearningPage />}
          />
          <Route path="ui-ux-design" element={<UiUxDesignPage />} />
          <Route
            path="automation-services"
            element={<AutomationServicesPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
