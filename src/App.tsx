import { PageWrapper, PageSection } from "./styles/app.style";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <PageWrapper id="main-app">
      <Header />
      <PageSection id="main-page"></PageSection>
      <Footer />
    </PageWrapper>
  );
};

export default App;
