import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Rec from "./components/recommendations/recommendations";
import PriceList from "./components/pricelist/pricelist";
import Questions from "./components/questions/questions";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Main />
      <Rec />
      <PriceList />
      <Questions />
      <Contact />
    </>
  );
}

export default App;
