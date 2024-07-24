import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Rec from "./components/recommendations/recommendations";
import PriceList from "./components/pricelist/pricelist";
import Questions from "./components/questions/questions";
import Contact from "./components/contact/contact";
import { TopPageInfo } from "./components/toppageinfo/TopPageInfo";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <TopPageInfo info={"Z powodu przerwy wakacyjnej biuro nieczynne od 20.07. do 30.07."} />
      <Main />
      <Rec />
      <PriceList />
      <Questions />
      <Contact />
    </>
  );
}

export default App;
