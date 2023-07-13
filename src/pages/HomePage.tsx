import Fiends from "../components/Fiends/Fiends";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/Nav/NavBar";
import LowerSection from "../components/LowerSection/LowerSection";
// import Project from "../components/Project/Project";
import ProjectList from "../components/ProjectList/ProjectList";

const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <Hero/>
      <ProjectList/>
      <Fiends />
      <LowerSection />
    </div>
  );
};

export default HomePage;