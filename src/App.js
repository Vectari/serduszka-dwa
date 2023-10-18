import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Rec from "./components/recommendations/recommendations";
import PriceList from "./components/pricelist/pricelist";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Main />
      <Rec />
      <PriceList />
    </>
  );
}

export default App;
