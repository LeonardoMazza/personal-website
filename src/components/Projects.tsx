import projects from "@/data/projects";

const Projects = () => {
  return (
    <section className="my-18" id="projects">
      <h2 className="text-1xl font-bold text-link-hover uppercase pt-8">Projects</h2>


      <div className="grid gap-12 md:gap-8 pt-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-card-background/5 hover:bg-card-background/40 transition-all duration-300 border border-transparent hover:border-link-hover/30"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {project.imageUrl && (
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              <div>
                <h3 className="text-lg text-primary font-bold mb-3 group-hover:text-link-hover transition-colors">
                  {project.title}
                </h3>

                <p className="text-text mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-card-background/60 text-link-hover text-xs font-medium px-3 py-1 rounded-full border border-link-hover/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
