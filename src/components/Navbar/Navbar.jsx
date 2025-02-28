import image from "../../assets/LogoEiPizza.png";
import NavItem from "./NavItem";

export default function Navbar() {
  const item = [
    {
      path: "Home",
    },
    {
      path: "Pizzas",
    },
    {
      path: "Feedbacks",
    },
  ];
  return (
    <>
      <nav className="
      z-50 
      fixed 
      flex 
      justify-between
      sm:justify-around 
      w-screen
      bg-[#062d99] 
      py-4 
      px-10">
        <img src={image} alt="Logo-Ei-Pizza" className="
        w-[200px] 
        hidden 
        md:flex" />

        <ul className="flex 
        justify-center 
        items-center 
        gap-14 
        text-white 
        font-bold">
          {item.map((item, index) => (
            <NavItem key={index} path={item.path}></NavItem>
          ))}
        </ul>

        <a
          href="https://www.instagram.com/eipizzapalmas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="
        flex
        justify-center
        items-center
        w-[150px] 
        rounded-md
      text-white 
        text-xl
      bg-green-600 
      hover:bg-green-700
        hover:tracking-widest
        duration-[0.2s]
        ease-in-out"
        >
          <button>Contato</button>
        </a>
      </nav>
    </>
  );
}
