export default function NavItem(props) {
  return (
    <a
      href={`#${props.path}`}
      className="
        text-[1.3rem] 
        cursor-pointer 
      hover:text-slate-300
        hover:text-[1.35rem]
        hover:underline
        duration-[0.2s]
        ease-in-out"
    >
      {props.path}
    </a>
  );
}
