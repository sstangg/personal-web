import PageLayout from "../PageLayout";
import imgAsciiArt from "@/assets/About/ascii-portrait.png";
import { TWO_COLUMN_PAGE_GRID } from "../layoutClasses";
import RESUME from "/Sophia_Tang_tech_resume_06042026.pdf?url";

function Pic() {
  return (
    <div className="aspect-[585/536] w-full overflow-hidden rounded-sm border border-dashed border-black bg-white md:aspect-auto md:h-full md:self-stretch" data-name="pic">
      <img alt=" acii style portrait photo of me, Sophia Tang" className="scale-[1.05] md:scale-[0.95] h-full w-full object-contain md:object-cover md:object-[center_32%] mix-blend-darken pointer-events-none" src={imgAsciiArt} />
    </div>
  );
}
function Description() {
  return (
    <div className="flex h-full w-full min-w-0 flex-col text-[clamp(1.5rem,6vw,1.7rem)] leading-relaxed text-black">
      <div className="whitespace-pre-wrap">
        <span className="mb-0">I study </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold">Computer Science @ Boston University. </span>
          <span className="mb-0 text-[clamp(1.4rem,2vw,1.5rem)] font-light">In my free time, I enjoy reading and exploring local cafes. </span>
      </div>
    </div>
  );
}
function Connect() {
    return (
        <div className="flex flex-1 flex-col gap-[clamp(1rem,1.8vh,1.5rem)] font-['Inter:Regular','Noto_Sans:Italic',sans-serif]">
            <div>
                <p className="mb-0 font-['Inter:Semi_Bold','Noto_Sans:Italic',sans-serif]  text-[clamp(1.5rem,5vw,1.6rem)]  font-semibold whitespace-pre-wrap">{`Let's connect! `}</p>
                <ul className=" list-disc text-[clamp(1.4rem,3.3vw,1.6rem)] ">
                    <li className=" mb-0 ms-6">
                        <a className="hover:underline text-[#593fa1]" href="mailto:sstang@bu.edu">sstang[at]bu.edu</a>
                    </li>
                    <li className="ms-6">
                <a href="https://linkedin.com/in/sstangg" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#6750a4] ">LinkedIn</a>
                    </li>
                    <li className="ms-6">
                <a href="https://github.com/sstangg" target="_blank" rel="noopener noreferrer" className="text-[#765fb3] hover:underline">GitHub</a>
                    </li>
                    <li className="ms-6">
              <a href={RESUME} target="_blank" rel="noopener noreferrer" className="text-[#8e76cc] hover:underline">Resume</a>
                    </li>
                </ul>
            </div>
            <div className="font-['Inter:Light',sans-serif] font-light whitespace-pre-wrap text-[clamp(1rem,1.7vw,1.4rem)]">
                <p className="mb-0">
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic">{`Affiliations: `}</span>
                    <span className="leading-[normal]">{`Girls Who Code, Rewriting The Code, AI Safety Association (AISA), Humanities and Artificial Intelligence Lab (HAIL)`}</span>
                </p>
            </div>
        </div>
    );
}

function Intro() {
  return (
    <div className="flex h-full w-full min-w-0 flex-1 flex-col justify-between overflow-hidden text-black" data-name="intro">
      <div className="flex flex-col gap-5 font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium text-[clamp(2rem,5vw,2.8rem)]">
        <p className="leading-none">
          <span>{`Hello `}</span>
          <span>你好!</span>
        </p>
        <p>My name is Sophia.</p>
      </div>
      <div className="min-h-0">
        <Description />
      </div>
      <div className="min-h-0">
        <Connect />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className={`${TWO_COLUMN_PAGE_GRID} flex-1 min-h-0 items-stretch gap-10 text-black`}>
         <Pic />
        <Intro />
    </div>
  );
}

export default function About() {
  return (
    <PageLayout pageName="Home">
      <Main />
    </PageLayout>
  );
}
