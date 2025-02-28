import image from "../../assets/EiPizza.jpg";
import InfoHome from "./InfoHome";

export default function Home() {
  return (
    <>
      <div className="-z-50 flex justify-start w-full max-w-full-sm h-screen">
        <img
          src={image}
          alt="Fundo"
          className="fixed opacity-20 object-fill w-screen min-h-full"
        />
        <InfoHome />
      </div>
    </>
  );
}
