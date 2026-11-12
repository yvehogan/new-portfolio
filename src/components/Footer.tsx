import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="pb-[46px] pt-[34px] text-[14.5px] text-dim">
      <div className="wrap flex flex-wrap justify-between gap-4 border-t border-line pt-[26px]">
        <span>© 2026 {profile.fullName}. Built with Next.js, TypeScript and Tailwind CSS.</span>
        <span className="flex gap-2 [&_a:hover]:text-fg">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>·
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>·
          <a href="#top">Back to top</a>
        </span>
      </div>
    </footer>
  );
}
