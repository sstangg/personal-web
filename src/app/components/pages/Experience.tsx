import PageLayout from "../PageLayout";
import { TimelineDotIcon } from "../Icons";
import imgGoogleSheets from "@/assets/Experience/icon-google-sheets.png";
import imgFigma from "@/assets/Experience/icon-figma.png";
import imgAngular from "@/assets/Experience/icon-angular.png";
import imgTypescript from "@/assets/Experience/icon-typescript.png";
import imgJavaScript from "@/assets/Experience/icon-javascript.png";
import imgLookerStudio from "@/assets/Experience/icon-looker-studio.png";
import imgPython from "@/assets/Experience/icon-python.png";

type Tag = {
  label: string;
  imgSrc?: string;
  alt?: string;
  borderColor?: string;
  textColor?: string;
  bgClass?: string;
};
// Centralized tag lookup table. Use the keys below in experience items' `tags` arrays.
const TAGS: Record<string, Tag> = {
  "google-sheets": { label: "Google Sheets", imgSrc: imgGoogleSheets, alt: "Google Sheets icon", borderColor: "#0b693c", textColor: "#0b693c", bgClass: "bg-[#f7fcf8]"  },
  "figma": { label: "Figma", imgSrc: imgFigma, alt: "Figma icon", borderColor: "#a60d70", textColor: "#a60d70", bgClass: "bg-[#fcf7fb]" },
  "angular": { label: "Angular", imgSrc: imgAngular, alt: "Angular icon", borderColor: "#a6120d", textColor: "#a6120d", bgClass: "bg-[#fcf8f7]" },
  "typescript": { label: "TypeScript", imgSrc: imgTypescript, alt: "TypeScript icon", borderColor: "#0d4fa6", textColor: "#0d4fa6", bgClass: "bg-[#f7fafc]" },
  "javascript": { label: "JavaScript", imgSrc: imgJavaScript, alt: "JavaScript icon", borderColor: "#a68a0d", textColor: "#a68a0d", bgClass: "bg-[#fcfcf7]"  },
  "looker-studio": { label: "Looker Studio", imgSrc: imgLookerStudio, alt: "Looker Studio icon", borderColor: "#0d2ca6", textColor: "#0d2ca6", bgClass: "bg-[#f7f8fc]"},
  "python": { label: "Python", imgSrc: imgPython, alt: "Python icon", borderColor: "#0d2ca6", textColor: "#0d2ca6", bgClass: "bg-[#f7f8fc]" },
};

function Timeline() {
  return (
    <div className="content-stretch relative flex self-stretch shrink-0 flex-col items-center px-4" data-name="timeline">
      <div className="flex-[1_0_0] min-h-px relative w-1.5" data-name="line" style={{ background: 'linear-gradient(to bottom, #6750a4 50%, #c2b8de 95%, transparent 100%)' }} />
      <div className="absolute left-2 top-2.5 size-5" data-name="Ellipse">
        <div className="absolute inset-0 -translate-y-1/2">
          <TimelineDotIcon className="absolute block inset-0 size-full" fillColor="var(--fill-0, #6750A4)" />
        </div>
      </div>
    </div>
  );
}

function TagPill({ label, imgSrc, alt, borderColor = "#ddd", textColor = "#000", bgClass = "bg-white" }: Tag) {
  return (
    <div className="inline-flex items-center relative shrink-0" data-name="Tag Slot">
      <div className={`${bgClass} inline-flex gap-2 items-center justify-center p-2 relative rounded-[5px]`} style={{}}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5px]" style={{ border: `1px solid ${borderColor}` }} />
        {imgSrc && (
          <div className="overflow-clip relative shrink-0 size-[1.1rem]">
              <img
                  className="max-h-full max-w-full object-contain"
                  alt={alt} src={imgSrc} />
          </div>
        )}
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-sm whitespace-nowrap" style={{ color: textColor }}>
          <p className="leading-none">{label}</p>
        </div>
      </div>
    </div>
  );
}

type ExperienceItemProps = {
  title: string;
  company?: string;
  dates: string;
  bullets?: string[];
  // tags are string keys that reference entries in TAGS
  tags?: string[];
};

function ExperienceItem({ title, company, dates, bullets = [], tags = [] }: ExperienceItemProps) {
  return (
    <div className="content-stretch flex w-full gap-8 items-start overflow-clip relative shrink-0" data-name="Position/description">
      <Timeline />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-2 items-start min-w-px pb-8 relative">
        <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between relative shrink-0 w-full gap-2 md:gap-4">
          <h3 className="flex-1 min-w-0 font-['Inter:Regular',sans-serif] font-normal not-italic text-[clamp(1.5rem,3vw,2rem)] text-black leading-[1.05]">{title}</h3>
          <p className="mt-2 md:mt-0 md:ml-4 font-['Inter:Light_Italic',sans-serif] font-light italic leading-[normal] shrink-0 text-[clamp(1rem,1.5vw,1.25rem)] text-black whitespace-nowrap self-start md:self-auto">{dates}</p>
        </div>
        {company && (
          <div className="w-full">
            <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal not-italic text-[clamp(1rem,1.5vw,1.25rem)] text-black mt-1">{company}</p>
          </div>
        )}
        {bullets.length > 0 && (
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
            <ul className="block font-['Inter:Light',sans-serif] font-light leading-[0] list-disc not-italic relative shrink-0 text-[clamp(0.95rem,1.4vw,1.125rem)] text-black w-full">
              {bullets.map((b, i) => (
                <li key={i} className={i === 0 ? "mb-0 ms-6" : "ms-6"}>
                  <span className="leading-[normal]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="w-full">
          {tags.length > 0 && (
            <div className="content-stretch flex flex-wrap items-center relative w-full gap-2">
              {tags
                .map((key) => TAGS[key])
                .filter(Boolean)
                .map((t, idx) => (
                  <div key={idx}>
                    <TagPill {...t} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Main() {
  const items = [
    {
      title: "Software Engineering Intern",
      dates: "May 2026 - Present",
      company: "Principal Financial Group",
      bullets: [] as string[],
      tags: [] as string[],
    },
    {
      title: "Treasurer",
      dates: "Jan 2026 -  Present",
      company: "Girls Who Code Boston University",
      bullets: [
        "Managed a $2.7K club budget using university financial systems and Google Sheets across 19 tech events",
        "Coordinated with 4 campus funding sources to secure $1.3K+ in additional funding through pitches & requests",
      ],
      tags: ["google-sheets"],
    },
    {
      title: "Web Designer",
      dates: "Oct 2025 -  Feb 2026",
      company: "Ohana Village Foundation",
      bullets: [
        "Designed a donor-facing website for a nonprofit client in a 4 person team using Figma and GoDaddy web builder",
        "Presented weekly in standup meetings with the client to gather feedback on brand voice and UX, translating their input into concrete design and content updates accounting for accessibility for elderly users",
      ],
      tags: ["figma"],
    },
    {
      title: "Software Development Intern",
      dates: "June - Aug 2025",
      company: "ClinicMind ⋅ Part-Time",
      bullets: [
        "Use Angular (v17+) with TypeScript & TailwindCSS to debug & maintain a portal for healthcare practitioners",
        "Collaborated with QA and management to clarify bug priorities and communicate fix decisions",
        "Ensured smooth integration of UI fixes into production via GitLab CI/CD pipelines",
      ],
      tags: ["angular", "typescript"],
    },
    {
      title: "Data Analytics Intern",
      dates: "May - Aug 2025",
      company: "Aspire High Youth Development ⋅ Part-Time",
      bullets: [
        "Directed a team of 5 interns to analyze survey data from Aspire High's educational programs",
        "Identified KPIs and designed Looker Studio dashboards to provide actionable insights for educators",
        "Automated survey data processing with JavaScript, saving 2+ hours of work for specialized dashboards",
        "Reduced workload by 50% by refining the project scope, establishing technical standards and documentation",
      ],
      tags: ["javascript", "looker-studio", "google-sheets"],
    },
    {
      title: "Coding Instructor",
      dates: "Mar - Apr 2025",
      company: "Girls Who Code Boston University",
      bullets: [
        "Taught 10 girls (grades 6-12) introductory Python through weekly remote lessons; designed lessons and homework assignments tailored to student skill levels",
      ],
      tags: ["python"],
    },
    {
      title: "Research Assistant",
      dates: "Apr -  Aug 2024",
      company: "National Emerging Infectious Disease Laboratories (NEIDL)",
      bullets: [
        "Executed, designed, and troubleshooted 150+ genetic cloning experiments to optimize Hepatitis C cell culturing systems with lab manager",
        "Gained experience with sterile technique, pipetting, and writing protocols",
      ],
      tags: [],
    },
  ];

  return (
    <div className="content-stretch flex w-full flex-col items-start min-h-px relative" data-name="main">
      {items.map((it, idx) => (
        <ExperienceItem key={idx} {...it} />
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <PageLayout pageName="Experience">
      <Main />
    </PageLayout>
  );
}
