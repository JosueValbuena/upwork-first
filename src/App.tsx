import { NavBar } from "./components/organism";
import { Footer } from "./components/organism";
import Routers from "./Routers/Index";

function App() {

  return (
    <div className="flex flex-col [&:nth-child(2)]:grow-1">
      <NavBar />
      <Routers />
      <Footer />
    </div>
  )
};

export default App;