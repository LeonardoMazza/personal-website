interface Experience {
  title: string;
  description: string;
  skills: string[];
  date: string;
}

const experiences: Experience[] = [
  {
    title: "Full-stack Developer – PDMFC (Client: Polícia Judiciária, Portugal)",
    description: "At PDMFC, I worked as a Full-stack Developer on enterprise systems for the Polícia Judiciária (Portuguese Criminal Police). My role involved maintaining and evolving large-scale web applications using Vue.js, Laravel, PHP, and Docker. I was responsible for migrating legacy Quasar components to PrimeVue, improving maintainability and user experience. Additionally, I led the development of a high-performance search module for investigations, leveraging microservices and performance-driven architecture to optimize query speed and scalability.",
    skills: ["Vue", "PHP", "Laravel", "TailwindCSS", "JavaScript"],
    date: "Mar 2024 - Jun 2025",
  },
  {
    title: "Full-stack Developer – Boost IT (Client: Lunar.be, Belgium)",
    description: "Worked as a Full-stack Developer on the Lunar.be project, a Belgian platform, handling both feature development and maintenance. Responsibilities included implementing new features, fixing bugs, and ensuring smooth operation across frontend and backend using Laravel and CraftCMS. I also managed deployment processes and server maintenance, ensuring system reliability and continuous delivery in a production environment.",
    skills: ["PHP", "Laravel", "JavaScript", "Docker", "CraftCMS"],
    date: "May 2023 - Mar 2024",
  },
  {
    title: "Full-stack Developer – Smart Consulting (Client: Quântico Solutions, Lisbon, Portugal)",
    description: "Worked as a Full-stack Developer for Quântico Solutions through Smart Consulting, contributing to large-scale web applications using Vue.js, React, and Laravel. Responsible for developing new features, refactoring legacy code, and improving overall application performance and scalability. Collaborated closely with design and backend teams to ensure maintainable architecture, clean code, and efficient deployment processes.",
    skills: ["React", "Vue", "PHP", "Laravel", "TailwindCSS", "JavaScript"],
    date: "Oct 2022 - Apr 2023",
  },
  {
    title: "Tech Lead - OPEN (Brazil)",
    description: "Led a development team focused on front-end solutions with Vue.js. Designed and maintained complex systems prioritizing performance and scalability. Developed and integrated APIs and optimized landing pages.",
    skills: ["React", "Vue", "JavaScript", "PHP", "Laravel", "TailwindCSS"],
    date: "Aug 2021 - Nov 2021",
  },
  {
    title: "Freelancer - Self-employed - Various Clients (Brazil)",
    description: "Delivered 150+ websites and systems for clients across industries. Created custom solutions using React, Vue.js, Laravel, WordPress and PHP. Ensured strong UX, SEO, mobile responsiveness, and performance optimization.",
    skills: ["React", "Vue", "PHP", "Laravel", "TailwindCSS", "JavaScript"],
    date: "Jun 2018 - Oct 2022",
  },


];
export { experiences };
export type { Experience };
