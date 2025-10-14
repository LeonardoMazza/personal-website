import About from "./About";
import ExperienceCard from "./ExperienceCard";
import Footer from "./Footer";

const SideRight = () => {

    return (
        <aside className="pt-24 lg:py-24">
            <About />
            <ExperienceCard />
            <Footer />
        </aside>
    );
}

export default SideRight;