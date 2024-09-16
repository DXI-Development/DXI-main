import { Routes, Route, Navigate } from "react-router-dom";

import { PageWrapper } from "@styles/app.style";

import IntroductionPage from "@pages/IntroductionPage";
import MainPage from "@pages/MainPage";
import RecruitPage from "@pages/RecruitPage";

import Header from "@components/Header";
import Footer from "@components/Footer";

const App = () => {
  window.addEventListener("beforeunload", () =>
    window.scroll({ top: 0, left: 0 })
  );

  return (
    <PageWrapper id="main-app">
      <Header />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/introduction" Component={IntroductionPage} />
        <Route path="/recruit" Component={RecruitPage} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </PageWrapper>
  );
};

export default App;
