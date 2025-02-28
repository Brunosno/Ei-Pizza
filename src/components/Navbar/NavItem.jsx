export default function NavItem(props) {
  return (
    <a
      href={`#${props.path}`}
      className="
        text-[1.3rem]
        2xl:text-[1.5em]
        cursor-pointer 
      hover:text-slate-300
        hover:underline
        duration-[0.2s]
        ease-in-out
        "
    >
      {props.path}
    </a>
  );
}
