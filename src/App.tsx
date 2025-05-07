import { ModeToggle } from "./components/mode-toggle"
import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <p className="text-[50px]">
        Click on the Vite and React logos to learn more
      </p>

      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button onClick={() => console.log('clic')}>Click me</Button>
        <ModeToggle />
      </div>
    </>
  )
}

export default App
