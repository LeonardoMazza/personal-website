import About from "./About";
import ExperienceCard from "./ExperienceCard";

const SideRight = () => {

    return (
        <aside className="hidden md:block">
            <About />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </aside>
    );
}

export default SideRight;