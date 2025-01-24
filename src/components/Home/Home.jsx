import image from "../../assets/EiPizza.jpg";
import InfoHome from "./InfoHome";

export default function Home() {
  return (
    <>
      <div className="-z-10 flex justify-center w-full h-screen bg-cover bg-bottom bg-no-repeat ">
        <img
          src={image}
          alt="Fundo"
          className="fixed opacity-20 object-fill w-full h-full bg-cover bg-no-repeat bg-fixed bg-opacity-10"
        />
        <InfoHome />
      </div>
    </>
  );
}
