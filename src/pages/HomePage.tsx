import Fiends from "../components/Fiends/Fiends";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/Nav/NavBar";
import LowerSection from "../components/LowerSection/LowerSection";
// import Project from "../components/Project/Project";
import ProjectList from "../components/ProjectList/ProjectList";
import WorkWithUs from "../components/WorkWithUs.tsx/WorkWithUs";


const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <LowerSection />
      <Hero/>
      <ProjectList/>
      <Fiends />
      <WorkWithUs />
    </div>
  );
};

export default HomePage;