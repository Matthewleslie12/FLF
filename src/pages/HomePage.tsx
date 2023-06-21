import NavBar from "../components/Nav/NavBar";
// import Project from "../components/Project/Project";
import ProjectList from "../components/ProjectList/ProjectList";
import WorkWithUs from "../components/WorkWithUs.tsx/WorkWithUs";


const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <ProjectList/>
      <WorkWithUs />
    </div>
  );
};

export default HomePage;
