import SabrinaImage from '../../assets/project-images/sabrina.png'
import { ProjectProps } from '../../types/projectType'
import TechStackList from '../TechStackList/TechStackList'

const Project = ({image,title,description,features,tech_stack}: ProjectProps) => {
    const imageMatcher = (projectImage:string) => {
        switch (projectImage){
            case "Sabrina":
                return SabrinaImage
                break;
        }
    }
    return (
        <article className='text-white xl:max-w-[1280px] xl:m-auto relative'>
            <h2 className=" font-bebas text-xs pl-4 md:text-[2.5rem] md:mb-6 xl:text-lg">Projects</h2>
            <div className="md:flex ">
                <div className="blur-xl rounded-full project-gradient absolute right-[50%] translate-x-1/2 h-[23rem] w-[23rem] md:w-[clamp(30rem,60vw,32rem)] md:h-[clamp(30rem,60vw,32rem)] md:left-[-8rem] md:right-0 md:translate-x-[9vw] xl:translate-x-[7rem] content"></div>
                <div className='relative rounded-full  h-96 max-w-sm  mx-auto flex md:w-[50%] md:mx-0 md:max-w-[50%]  md:h-[30rem] xl:w-[45%]'>
                    <h4 className='mx-auto  absolute left-1/2 top-[2.5rem] translate-x-[-50%] font-bebas text-xxs md:text-xs xl:text-md md:top-[3rem] md:left-[min(50%,14rem)] xl:left-1/2 xl:translate-x-[-100%] xl:top-[2.5rem]'>{title}</h4>
                    <img className="m-auto z-10 h-[14rem] md:relative md:mx-[clamp(2rem,5vw,4rem)] md:h-[clamp(14rem,30vw,18rem)]" src={imageMatcher(image)} alt="project image for sabfit" />
                </div> 
                <div className="flex  px-6 gap-x-6 mb-4 md:w-[50%] md:flex-col md:gap-x-0 md:gap-y-6 xl:gap-0 xl:w-[55%]">
                    <article className='basis-1/2 md:relative  md:right-4 '>
                        <h4 className='font-bebas text-xxs mb-4 md:text-xs xl:text-md'>Description</h4>
                        <p className='font-oxanium leading-7 text-[.9rem] max-w-[16rem] md:text-[1.25rem] md:leading-9 xl:text-xs xl:max-w-[100%] xl:leading-10'>{description}</p>
                    </article>
                    <article className='basis-1/2'>
                        <h4 className='font-bebas text-xxs mb-4 relative  right-4 md:text-xs xl:text-md'>Key Features</h4>
                        <ul className='font-oxanium leading-7 text-[.9rem] list-disc md:text-[1.25rem] md:leading-9 xl:text-xs xl:leading-10'>
                            {features.map(feature=>{
                                return <li key={features.indexOf(feature)}>{feature}</li>
                            })}
                        </ul>
                    </article>
                </div>
            </div>
            
           <article className='flex flex-col items-center mx-4 xl:absolute xl:right-0 xl:bottom-0'>
                <h4 className='font-bebas text-xxs mb-4 md:text-xs xl:text-md'>Tech Stack</h4>
                <TechStackList {...tech_stack}/>
           </article>
        </article>
    );
};

export default Project;