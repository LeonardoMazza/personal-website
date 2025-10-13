import About from "./About";
import ExperienceCard from "./ExperienceCard";
import Footer from "./Footer";

const SideRight = () => {

    return (
        <aside className="hidden md:block">
            <About />
            <ExperienceCard />
            <Footer />
        </aside>
    );
}

export default SideRight;