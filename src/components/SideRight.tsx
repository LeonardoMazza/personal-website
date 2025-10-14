import About from "./About";
import ExperienceCard from "./ExperienceCard";
import Projects from "./Projects";
import Footer from "./Footer";

const SideRight = () => {

    return (
        <aside className="pt-24 lg:py-24">
            <About />
            <ExperienceCard />
            <Projects />
            <Footer />
        </aside>
    );
}

export default SideRight;