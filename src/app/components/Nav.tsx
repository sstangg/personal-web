import { Link, useLocation } from "react-router";
import { TWO_COLUMN_PAGE_GRID } from "./layoutClasses";
import { useRef, useState } from "react";

export default function Nav() {
  const location = useLocation();

  const isAbout = location.pathname === "/";
  const isProjects = location.pathname === "/projects";
  const isExperience = location.pathname === "/experience";
    const [index, setIndex] = useState(0);
  const throttleRef = useRef(false);


  return (
    <nav className={`${TWO_COLUMN_PAGE_GRID} items-end gap-y-4 font-['Helvetica_Neue:Italic',sans-serif] text-black`} data-name="nav">
      <div
        onMouseEnter={() => {
          if (!throttleRef.current) {
            setIndex((prev) => (prev + 1) % 3);
            throttleRef.current = true;
            setTimeout(() => {
              throttleRef.current = false;
            }, 100);
          }
        }}
        className=" text-[clamp(2rem,4vw,2.5rem)] cursor-pointer font-medium w-fit  leading-none tracking-tight"
        data-name="Sophia Tang"
      >
        {index === 0 && <div>Sophia Tang</div>}
        {index === 1 && <div className="font-thin">Sophia Siwei Tang</div>}
        {index === 2 && <div className="font-light">唐思微</div>}
      </div>
      <div className="flex w-full italic flex-wrap items-center justify-between tracking-wide text-[clamp(1.5rem,2.8vw,2rem)] leading-none whitespace-nowrap" data-name="Nav links">
        <Link to="/" className={`${isAbout ? "text-[#6750a4]" : "text-black"}`}>
          about
        </Link>
        <Link to="/projects" className={`${isProjects ? "text-[#6750a4]" : "text-black"}`}>
          projects
        </Link>
        <Link to="/experience" className={`${isExperience ? "text-[#6750a4]" : "text-black"}`}>
          experience
        </Link>
      </div>
    </nav>
  );
}
