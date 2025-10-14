interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ultragaz Website",
    description: "Corporate website built at Ana Couto for Ultragaz, featuring a custom WordPress theme focused on accessibility, responsiveness, and performance.",
    technologies: ["WordPress", "PHP", "JavaScript"],
    imageUrl: "/images/ultragaz.png",
    link: "https://www.ultragaz.com.br/",
  },
  {
    id: 2,
    title: "Tivit Website",
    description: "Corporate website built at Ana Couto for Tivit, featuring a custom WordPress theme focused on accessibility, responsiveness, and performance.",
    technologies: ["WordPress", "PHP", "JavaScript"],
    imageUrl: "/images/tivit.png",
    link: "https://www.tivit.com/",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for Project Three",
    imageUrl: "/images/project-three.png",
    technologies: ["Angular", "TypeScript"],
    link: "https://project-three.example.com",
  },
];
export default projects;