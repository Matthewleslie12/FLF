import SabrinaImage from '../../assets/sabrina.png'

import ReactIcon from '../../assets/Tech-icons/react.png'
import HTMLIcon from '../../assets/Tech-icons/html.png'
import SASSIcon from '../../assets/Tech-icons/sass.png'
import NodeIcon from '../../assets/Tech-icons/nodejs.png'
import ExpressIcon from '../../assets/Tech-icons/express-js-icon.png'
import PostGresIcon from '../../assets/Tech-icons/Postgresql_elephant.svg.png'

const Project = () => {
    return (
        <article className='text-white'>
            <h2 className=" font-bebas text-xs pl-4">Projects</h2>
            <div className="md:flex ">
                <div className='relative rounded-full  h-96 max-w-sm  mx-auto flex md:w-[50%] md:mx-0 md:max-w-[50%]  md:h-[30rem]'>
                    <div className="blur-xl rounded-full project-gradient absolute top-0 left-0 right-0 bottom-0 md:w-[30rem] md:left-[-8rem] "></div>
                    <img className="m-auto z-10 h-[14rem] md:relative md:left-[-2rem]" src={SabrinaImage} alt="project image for sabfit" />
                </div>
                <div className="flex  px-4 gap-x-6 mb-4 md:w-[50%] md:flex-col md:gap-x-0 md:gap-y-6">
                    <article className='basis-1/2 md:relative  md:right-4 '>
                        <h4 className='font-bebas text-xxs mb-4'>Description</h4>
                        <p className='font-oxanium leading-7 text-[.9rem] max-w-[12rem]'>A fitness web application and CRM system complete with modern UI/UX design.</p>
                    </article>
                    <article className='basis-1/2'>
                        <h4 className='font-bebas text-xxs mb-4 relative  right-4'>Key Features</h4>
                        <ul className='font-oxanium leading-7 text-[.9rem] list-disc'>
                            <li>Landing Page</li>
                            <li>User login & Profile page</li>
                            <li>Admin Dashboard</li>
                            <li>Onboarding System</li>
                        </ul>
                    </article>
                </div>
            </div>
            
           <article className='flex flex-col items-center mx-4 '>
                <h4 className='font-bebas text-xxs mb-4'>Tech Stack</h4>
                <div className="flex grid-cols-6 gap-2">
                    <article className='flex flex-col items-center'>
                        <div className="flex items-center justify-center bg-white h-[2.75rem] w-[2.75rem] rounded-full border-4 border-[#610213] mb-2">
                            <img src={ReactIcon} className='w-[1.5625rem]' alt="" />
                        </div>
                        <p className="font-oxanium text-[.8rem]">React</p>
                    </article>
                    <article className='flex flex-col items-center'>
                        <div className="flex items-center justify-center bg-white h-[2.75rem] w-[2.75rem] rounded-full border-4 border-[#610213] mb-2">
                            <img src={HTMLIcon} className='w-[1.5625rem]' alt="" />
                        </div>
                        <p className="font-oxanium text-[.9rem]">HTML</p>
                    </article>
                    <article className='flex flex-col items-center'>
                        <div className="flex items-center justify-center bg-white h-[2.75rem] w-[2.75rem] rounded-full border-4 border-[#610213] mb-2">
                             <img src={SASSIcon} className='w-[1.5625rem]' alt="" />
                        </div>
                        <p className="font-oxanium text-[.9rem]">SASS</p>
                    </article>
                    <article className='flex flex-col items-center'>
                        <div className="flex items-center justify-center bg-white h-[2.75rem] w-[2.75rem] rounded-full border-4 border-[#610213] mb-2">
                            <img src={NodeIcon} className='w-[1.5625rem]' alt="" />
                        </div>
                        <p className="font-oxanium text-[.9rem]">Node</p>
                    </article>
                    <article className='flex flex-col items-center'>
                        <div className="flex items-center justify-center bg-white h-[2.75rem] w-[2.75rem] rounded-full border-4 border-[#610213] mb-2">
                            <img src={ExpressIcon} className='w-[1.5625rem]' alt="" />
                        </div>
                        <p className="font-oxanium text-[.9rem]">Express</p>
                    </article>
                    <article className='flex flex-col items-center'>
                        <div className="flex items-center justify-center bg-white h-[2.75rem] w-[2.75rem] rounded-full border-4 border-[#610213] mb-2">
                            <img src={PostGresIcon} className='w-[1.5625rem]' alt="" />
                        </div>
                        <p className="font-oxanium text-[.9rem]">PostGres</p>
                    </article>
                </div>
           </article>
        </article>
    );
};

export default Project;