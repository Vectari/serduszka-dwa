import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Rec from "./components/recommendations/recommendations";
import PriceList from "./components/pricelist/pricelist";
import Questions from "./components/questions/questions"

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Main />
      <Rec />
      <PriceList />
      <Questions />
    </>
  );
}

export default App;
