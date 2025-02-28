import PizzaComponent from "./PizzaComponent";
import { SwiperSlide, Pizza01, Pizza02, Pizza03 } from "./PizzasImport";
import "swiper/css";

export default function PizzaSlider() {
  const pizzas = [
    {
      sabor: "Cogumelo",
      imagem: Pizza01,
    },
    {
      sabor: "Calabresa",
      imagem: Pizza02,
    },
    {
      sabor: "Marguerita",
      imagem: Pizza03,
    },
  ];

  return (
    <div id="Pizzas" className="z-30 relative w-full h-full flex mb-[300px]">
      <div className="w-[100%] h-[80%] md:h-[100%] md:gap-5">
        <h1 className="text-7xl text-center my-[100px]">Nossas Pizzas</h1>

        <PizzaComponent
          content={pizzas.map((pizza, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex flex-col items-center gap-4 2xl:mt-[80px]">
                <img
                  src={pizza.imagem}
                  alt={pizza.sabor}
                  className="w-[350px] 2xl:w-[450px]"
                />

                <h2 className="text-white text-5xl">{pizza.sabor}</h2>
              </div>
            </SwiperSlide>
          ))}
        />
      </div>
    </div>
  );
}
