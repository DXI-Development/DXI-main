import { Routes, Route } from "react-router-dom";

import { PageWrapper } from "@styles/app.style";

import MainPage from "@pages/MainPage";
import RecruitPage from "@pages/RecruitPage";

import Header from "@components/Header";
import Footer from "@components/Footer";

const App = () => {
  return (
    <PageWrapper id="main-app">
      <Header />
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/recruit" Component={RecruitPage} />
      </Routes>
      <Footer />
    </PageWrapper>
  );
};

export default App;
