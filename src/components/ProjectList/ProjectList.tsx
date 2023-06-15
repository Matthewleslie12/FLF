import { useState,useEffect } from "react";
import projectJSON from '../../content/projects.json'
import Project from "../Project/Project";
import { ProjectProps } from '../../types/projectType'



const ProjectList = () => {
    const [projects,setProjects] = useState<ProjectProps[]>([]);

    useEffect(() => {
        if(projects != projectJSON){
            setProjects(projectJSON)
            
        }
    },[projects])

    return (
        <ul>
            {projects.map(project =>{
                return <li key={projects.indexOf(project)}><Project {...project}/></li>
            })}
        </ul>
    );
};

export default ProjectList;