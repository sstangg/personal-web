import { Link, useLocation } from "react-router";
import { TWO_COLUMN_PAGE_GRID } from "./layoutClasses";

export default function Nav() {
  const location = useLocation();

  const isAbout = location.pathname === "/";
  const isProjects = location.pathname === "/projects";
  const isExperience = location.pathname === "/experience";

  return (
    <nav className={`${TWO_COLUMN_PAGE_GRID} items-end gap-y-4 font-['Helvetica_Neue:Italic',sans-serif] text-black`} data-name="nav">
      <div className="font-medium w-fit text-[clamp(2rem,4vw,2.5rem)] leading-none tracking-wider" data-name="Sophia Tang">
        Sophia Tang
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
