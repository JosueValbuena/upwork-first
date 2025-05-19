// App.tsx

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavBar, Footer } from "./components/organism";
import Routers from "./Routers/Index";
import { selectTheme } from "./store/features/theme-mode/themeModeSlice";

function App() {
  const { theme } = useSelector(selectTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900">
      <NavBar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;