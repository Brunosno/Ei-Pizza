import FeedBack from "./components/Feedback/FeedBack"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import PizzaSlider from "./components/SliderPizzas/PizzaSlider"

function App() {
  return (
    <div className="bg-[#081027] text-white font-bold w-screen max-h-full h-full">
      <Navbar />
      <Home />
      <PizzaSlider />
      <FeedBack />
    </div>
  )
}

export default App
