import { NavBar } from "./components/organism";
import { Footer } from "./components/organism";
import Routers from "./Routers/Index";

function App() {

  return (
    <>
      <NavBar />
      <Routers />
      <Footer />
    </>
  )
};

export default App;