export const GITHUB = "https://github.com/yvehogan";

export const profile = {
  firstName: "Evelyn",
  lastName: "Ita Hogan",
  fullName: "Evelyn Ita Hogan",
  title: "Frontend Engineer",
  location: "Lagos, Nigeria",
  email: "hoganevelyn5@gmail.com",
  linkedin: "https://www.linkedin.com/in/evelyn-ita/",
  github: GITHUB,
  cv: "https://drive.google.com/file/d/15DuiMhCGEZ6WDRoE5o7OqxxlzEow6oar/view?usp=sharing",
  formEndpoint: "https://formspree.io/f/xzdjkzqr",
  lede: "I build production web applications in React, Next.js and TypeScript for banking, government and EdTech, including AI-powered products people use every day.",
};

export const roles = [
  "Frontend Engineer",
  "React & Next.js Developer",
  "AI Product Builder",
  "Frontend Mentor",
];

export const stats = [
  { value: 4, suffix: "+", label: "years building for the web" },
  { value: 5000, suffix: "+", label: "staff served by a reporting tool I helped build" },
  { value: 60, suffix: "%", label: "less reporting delay on an NGO platform" },
];

export const stack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs",
  "AI features", "AWS", "Azure", "Docker", "GitHub Actions", "Figma",
];

export type Project = {
  name: string;
  kind: string;
  year: string;
  tagline: string;
  desc: string;
  tags: string[];
  live?: string;
  repo?: string;
  color: string;
  tint: string;
  wide?: boolean;
};

export const featured: Project[] = [
  {
    name: "SODC",
    kind: "AI learning platform",
    year: "2024–25",
    tagline: "AI tutoring for a dental school",
    desc: "An education platform used by a dental school, with AI summaries and tutoring, live classes, chat support, assignments, grading and assessments. I built major parts of it, including the Admin, Teacher and Student dashboards.",
    tags: ["AI tutoring", "Live classes", "Assessments", "Role dashboards"],
    live: "https://app-sodc.optimusai.ai",
    color: "#2f5d50",
    tint: "#bfe3d3",
    wide: true,
  },
  {
    name: "PassDel",
    kind: "Government service",
    year: "2024–25",
    tagline: "Passport delivery, tracked live",
    desc: "Passport delivery and visa/permit tracking for the Nigerian Immigration Service, with secure requests and live tracking.",
    tags: ["Secure requests", "Live tracking", "Public sector"],
    live: "https://passdel.optimusai.ai",
    color: "#1f4e79",
    tint: "#c3dcf3",
  },
  {
    name: "Uplift",
    kind: "Embedded finance",
    year: "2024",
    tagline: "Connecting NGOs and donors",
    desc: "An embedded finance platform connecting NGOs and donors around financial inclusion, with forms, reporting and charts.",
    tags: ["Next.js", "TypeScript", "Firebase", "Recharts"],
    live: "https://uplift-ideax.netlify.app",
    repo: "ideax-uplift",
    color: "#a84a25",
    tint: "#f7d5c2",
  },
  {
    name: "GoLearn",
    kind: "EdTech platform",
    year: "2025",
    tagline: "Financial literacy for everyone",
    desc: "An EdTech platform teaching financial literacy and digital skills, with a public site and an admin dashboard.",
    tags: ["Public site", "Admin dashboard", "EdTech"],
    live: "https://mygolearn.com",
    color: "#7a5c12",
    tint: "#f4e3ab",
  },
  {
    name: "Guyversation",
    kind: "Mentorship platform",
    year: "2025–26",
    tagline: "A safe space for boys and mentors",
    desc: "A safe space where boys connect with real male mentors for guidance, growth and honest conversations.",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Radix UI"],
    live: "http://myguy.me/",
    repo: "Guyversation",
    color: "#5a3e6b",
    tint: "#e2d0ec",
  },
  {
    name: "Nexus",
    kind: "Enterprise portal",
    year: "2026",
    tagline: "Innovation value realization",
    desc: "A portal that tracks an innovation portfolio: initiatives, milestones, progress updates and the value delivered against strategic objectives, with a dashboard that flags initiatives at risk.",
    tags: ["Next.js 16", "React 19", "Tailwind v4", "TanStack Query"],
    repo: "value-realization",
    color: "#6b2d3a",
    tint: "#f1ccd4",
  },
  {
    name: "Out of Office",
    kind: "Book platform",
    year: "2026",
    tagline: "A playbook for bold leaders",
    desc: "The home of a playbook for young professionals and emerging leaders: an animated public website plus an admin dashboard for products, orders, customers and store analytics.",
    tags: ["Next.js", "TanStack Query", "Framer Motion", "shadcn/ui"],
    live: "https://www.theoutofoffice.org/",
    repo: "out-of-office-user",
    color: "#3d4a2a",
    tint: "#dde8c2",
  },
  {
    name: "Wema Analytics",
    kind: "Data hub",
    year: "Wema Bank",
    tagline: "Bank performance in one place",
    desc: "A central data hub for Wema Bank that brings deposit trends, branch and account-officer performance, profitability and retail segment data into one set of dashboards, reducing scattered data by 30%.",
    tags: ["Dashboards", "Financial reporting", "Admin", "REST APIs"],
    color: "#2c5560",
    tint: "#c4e3ea",
  },
  {
    name: "Account Re-up",
    kind: "Banking",
    year: "Wema Bank",
    tagline: "Reactivate your account in a few clicks",
    desc: "Wema Bank's account reactivation portal. Customers enter their account number, verify with BVN or NIN, pass a liveness check and OTP, and confirm their address, while staff track requests on an admin side. Simplifying the flow improved reactivation by 40%.",
    tags: ["BVN & NIN verification", "Liveness check", "OTP", "Admin portal"],
    color: "#5c4630",
    tint: "#ead9c5",
  },
];

export const more = [
  { name: "ngage", desc: "Civic waitlist: track your council, share your voice.", tech: "Next.js · Framer Motion", href: "https://ngage-six.vercel.app/" },
  { name: "Boys Quarters Africa", desc: "NGO site for a movement empowering boys and men.", tech: "Next.js · NextUI", href: `${GITHUB}/boys-quarters-arfica` },
  { name: "MyGuy", desc: "Digital community connecting boys to mentors and men to community.", tech: "Next.js · Framer Motion", href: `${GITHUB}/myguy` },
  { name: "Audiophile", desc: "E-commerce build with cart and checkout, backed by Firestore.", tech: "Next.js · Redux Toolkit", href: `${GITHUB}/Audiophile-project` },
  { name: "Cloud Deployment", desc: "Next.js app on DigitalOcean behind an Nginx reverse proxy.", tech: "Nginx · Ubuntu · PM2", href: `${GITHUB}/cloud-school-second-semester-exam` },
];

export const experience = [
  {
    role: "Frontend Engineer",
    company: "Wema Bank Plc",
    period: "2022 – Present",
    place: "Lagos, Nigeria",
    note: "Intern (2022–23) → Contract (2023–24) → Full-time (2024–present)",
    points: [
      "Built an NGO management platform that cut reporting delays by more than 60%.",
      "Built a central data hub bringing sales, portfolio and performance data into one place, reducing scattered data by 30%.",
      "Helped build a performance-reporting tool that generates reports for 5,000+ staff across regions and departments.",
      "Built a digital onboarding system that halved new-hire processing time.",
      "Improved customer account reactivation by 40% by simplifying the experience and workflow.",
      "Worked with teams across the bank to rebuild the staff intranet.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "OptimusAI Labs",
    period: "Nov 2024 – Dec 2025",
    place: "Remote",
    note: "",
    points: [
      "Built major parts of an AI learning platform used by a dental school: live classes, AI tutoring and summaries, chat support, assignments, grading and assessments.",
      "Built the Admin, Teacher and Student dashboards behind the learning and assessment features.",
      "Developed PassDel, the Nigerian Immigration Service's passport delivery and tracking system.",
      "Rebuilt the OptimusAI website and added an AI chat assistant.",
      "Turned detailed Figma designs into fast, reusable components and documented the patterns.",
    ],
  },
];

export const skills = [
  { title: "Frontend", color: "var(--color-accent)", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Context API", "Responsive design"] },
  { title: "APIs", color: "var(--color-accent)", items: ["REST APIs", "API integration", "Error handling", "Postman"] },
  { title: "AI", color: "var(--color-accent)", items: ["AI tutoring & summaries", "Chat assistants", "Testing AI responses"] },
  { title: "Cloud & DevOps", color: "var(--color-accent)", items: ["AWS (EC2, S3, CloudFront, IAM)", "Azure", "Google Cloud", "Docker", "GitHub Actions CI/CD"] },
  { title: "Tools & practice", color: "var(--color-accent)", items: ["Git & GitHub", "Figma", "Code review", "Agile / Scrum", "Technical documentation"] },
];

export const education = [
  { title: "Cloud Computing", org: "AltSchool Africa", period: "2024 – 2025", detail: "Cloud infrastructure, DevOps, and how modern software gets built and shipped." },
  { title: "Tech4Dev Women Fellowship", org: "Participant", period: "", detail: "Fully funded, one-year learning and mentorship programme." },
  { title: "B.Eng. Petroleum Engineering", org: "Igbinedion University Okada", period: "2013 – 2018", detail: "Second Class Upper Division (2:1)." },
];

export const mentoring = [
  { title: "Frontend Mentor", org: "Tech4Dev", period: "", detail: "Mentoring people learning frontend development, reviewing their work and helping them grow into confident developers." },
  { title: "Mentor", org: "Wema Bank Hackaholics", period: "Jan 2026", detail: "Guided hackathon teams through technical challenges and architecture reviews, and helped them prepare final demos." },
];
