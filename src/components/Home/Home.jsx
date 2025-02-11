import image from "../../assets/EiPizza.jpg";
import InfoHome from "./InfoHome";

export default function Home() {
  return (
    <>
      <div className="-z-50 flex justify-center w-full h-screen">
        <img
          src={image}
          alt="Fundo"
          className="fixed opacity-20 object-fill w-full h-full"
        />
        <InfoHome />
      </div>
    </>
  );
}
