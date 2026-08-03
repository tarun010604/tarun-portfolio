import { Link } from "react-scroll";

const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {links.map((item) => (
        <li key={item}>
          <Link
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            activeClass="text-blue-400"
            className="
              relative
              cursor-pointer
              text-slate-300
              font-medium
              transition-all
              duration-300
              hover:text-blue-400
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-blue-400
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}