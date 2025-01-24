import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import PizzaSlider from "./components/SliderPizzas/PizzaSlider"

function App() {
  return (
    <div className="bg-[#081027]">
      <Navbar />
      <Home />
      <PizzaSlider />
    </div>
  )
}

export default App
