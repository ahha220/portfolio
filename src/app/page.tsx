import Image from "next/image";
import Reveal from "../components/Reveal";
import HoverCard from "../components/HoverCard";
import Sprite from "../components/Sprite";

const experience = [
  {
    dates: "2026 - Present",
    company: "Nova Software Company",
    role: "Full Stack Developer",
    href: "https://www.mapnova.com/",
    image: "/experience/nova.jpg",
  },
  {
    dates: "2026 - Present",
    company: "Hack Canada",
    role: "Full Stack Developer",
    href: "https://hackcanada.org",
    image: "/experience/hack-canada.png",
  },
  { dates: "2026", company: "CIBC", role: "Developer", href: "https://www.cibc.com", image: "/experience/cibc.jpg" },
];

const portraitFrames = ["/home/portrait/1.png", "/home/portrait/2.png", "/home/portrait/3.png"];

const catFrames = ["/home/cat.png", "/home/cat-blue.png"];

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amyjhuang/" },
  { label: "Github", href: "https://github.com/ahha220" },
  { label: "a287huan@uwaterloo.ca", href: "mailto:a287huan@uwaterloo.ca" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[1728px] flex-col items-center overflow-hidden text-body leading-[normal] font-light tracking-[-0.05em] lg:flex-row lg:justify-center">
      <Reveal className="relative z-10 flex min-h-svh w-[23.67em] flex-col justify-center gap-flow lg:min-h-0 lg:w-[27em] lg:shrink-0">
        <Intro />
        <Divider />
        <Experience />
        <Divider />
        <Connect />
      </Reveal>
      <Portrait />
    </main>
  );
}

function Intro() {
  return (
    <header className="relative">
      <h1 className="text-hero font-bold tracking-normal">
        hi, i’m <span className="text-accent">amy!</span>
      </h1>
      <p className="mt-[0.5em]">
        i’m currently still working on this site ദ്ദി(˃ ᵕ ˂ ദ്ദി)
        <br />
        please come back soon!
      </p>
      <Doodles />
    </header>
  
  );
}

function Doodles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -top-[0.91em] -left-[0.86em] h-[1.46em] w-[1.83em] text-hero lg:-top-[0.57em] lg:-left-[0.61em] lg:h-[1.17em] lg:w-[1.46em]"
    >
      <div className="absolute top-[11.1%] left-0 h-[88.9%] w-[95.2%] overflow-hidden">
        <Sprite
          frames={catFrames}
          width={545}
          height={545}
          className="absolute -top-[187.46%] -left-[144.87%] h-[523.88%] w-[391.74%]"
        />
      </div>
      <Sparkle src="/home/sparkle-large.svg" className="top-[3%] left-[69.9%] h-[34.8%] w-[22.4%] rotate-[31.72deg]" />
      <Sparkle src="/home/sparkle-small.svg" className="-top-[6.2%] left-[84.3%] h-[28.6%] w-[19.6%] rotate-[23.78deg]" />
    </div>
  );
}

function Sparkle({ src, className }: { src: string; className: string }) {
  return <Image src={src} alt="" width={33} height={41} className={`absolute ${className}`} />;
}

function Experience() {
  return (
    <section className="-mt-[0.83em] lg:mt-0">
      <h2 className="mb-flow text-title font-medium">experience</h2>
      <ul className="grid gap-y-flow whitespace-nowrap">
        {experience.map(({ dates, company, role, href, image }) => (
          <li key={company}>
            <HoverCard
              title={company}
              image={image}
              href={href}
              className="grid grid-cols-[14.2em_auto] lg:grid-cols-[6.63em_11.23em_auto]"
            >
              <span className="font-bold text-accent lg:order-2">{company}</span>
              <span className="row-start-2 lg:order-1 lg:row-start-1">{dates}</span>
              <span className="lg:order-3">{role}</span>
            </HoverCard>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Connect() {
  return (
    <nav className="flex gap-[1em] text-caption whitespace-nowrap lg:pt-[0.27em]">
      <span className="font-medium text-accent">Let’s connect!</span>
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          className="font-normal transition-colors hover:text-accent"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

function Portrait() {
  return (
    <Reveal delay={0.4} className="lg:-mr-[13.6em] lg:-ml-[14.7em] lg:-translate-y-[3em] lg:shrink-0">
      <figure className="flex min-h-svh flex-col items-center justify-center gap-flow pb-[26svh] lg:min-h-0 lg:pb-0">
        <Sprite
          frames={portraitFrames}
          width={1285}
          height={893}
          alt="MEASF !"
          className="pointer-events-none w-[146vw] lg:w-[42.83em]"
        />
        <figcaption className="text-[20px] font-normal text-accent lg:hidden">
          <a href="#">amyjhuang.com</a>
        </figcaption>
      </figure>
    </Reveal>
  );
}

function Divider() {
  return <hr className="border-t-2 border-divider lg:border-t-[3px]" />;
}
