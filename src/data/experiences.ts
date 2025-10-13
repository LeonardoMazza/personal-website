interface Experience {
  title: string;
  description: string;
  skills: string[];
  date: string;
}

const experiences: Experience[] = [
  {
    title: "Full-stack Developer - PDMFC/Polícia Judiciária",
    description: "Developed dynamic and responsive web applications using Vue.js with PrimeVue components integrated with Laravel APIs. Built admin dashboards and reusable components with TailwindCSS.Involved in the full product lifecycle including requirements analysis, implementation, testing, andperformance optimization.",
    skills: ["Vue", "PHP", "Laravel", "TailwindCSS", "JavaScript"],
    date: "Mar 2024 - Jun 2025",
  },
  {
    title: "Software Developer - BoostIT/Lunar.be",
    description: "Worked on CraftCMS-based projects, contributing to new features and enhancements. Managed DNS, domains, and server environments in Docker. Collaborated with multidisciplinary teams using Agile (Kanban), Git, and Jira.",
    skills: ["PHP", "Laravel", "JavaScript", "Docker", "CraftCMS"],
    date: "May 2023 - Mar 2024",
  },
  {
    title: "Full-stack Developer - Smart Consulting",
    description: "Built features for large-scale web applications with Vue.js front-end and Laravel back-end.Refactored code, standardized Git workflows, and implemented best practices for scalabledevelopment",
    skills: ["React", "Vue", "PHP", "Laravel", "TailwindCSS", "JavaScript"],
    date: "Oct 2022 - Apr 2023",
  },
  {
    title: "Tech Lead - OPEN",
    description: "Led a development team focused on front-end solutions with Vue.js. Designed and maintained complex systems prioritizing performance and scalability. Developed and integrated APIs and optimized landing pages.",
    skills: ["React", "Vue", "JavaScript", "PHP", "Laravel", "TailwindCSS"],
    date: "Aug 2021 - Nov 2021",
  },
  {
    title: "Freelancer - Self-employed - Various Clients",
    description: "Delivered 150+ websites and systems for clients across industries. Created custom solutions using Vue.js, Laravel, and PHP. Ensured strong UX, SEO, mobile responsiveness, and performance optimization.",
    skills: ["React", "Vue", "PHP", "Laravel", "TailwindCSS", "JavaScript"],
    date: "Jun 2018 - Oct 2022",
  },


];
export { experiences };
export type { Experience };
