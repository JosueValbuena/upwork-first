import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectThemeSlice } from '@/store/features/theme-mode/themeModeSlice';
import { NavBar } from "./components/organism";
import { Footer } from "./components/organism";
import Routers from "./Routers/Index";

function App() {

  const { theme } = useSelector(selectThemeSlice);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col [&:nth-child(2)]:grow-1">
      <NavBar />
      <Routers />
      <Footer />
    </div>
  )
};

export default App;