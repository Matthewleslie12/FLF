import ReactIcon from '../../assets/Tech-icons/react.png'
import HTMLIcon from '../../assets/Tech-icons/html.png'
import SASSIcon from '../../assets/Tech-icons/sass.png'
import NodeIcon from '../../assets/Tech-icons/nodejs.png'
import ExpressIcon from '../../assets/Tech-icons/express-js-icon.png'
import PostGresIcon from '../../assets/Tech-icons/Postgresql_elephant.svg.png'

const TechStackItem = ({language}:{language:string}) => {

    const iconMatcher = (language:string) => {
        switch (language){
            case "React":
                return ReactIcon
                break;
            case "HTML":
                return HTMLIcon
                break;
            case "SASS":
                return SASSIcon
                break;
            case "Node":
                return NodeIcon
                break;
            case "Express":
                return ExpressIcon
                break;
            case "PostGres":
                return PostGresIcon
                break;

        }
    }
    return (
        <article className='flex flex-col items-center'>
            <div className="flex items-center justify-center bg-white h-[clamp(2.75rem,12vw,5.625rem)] w-[clamp(2.75rem,12vw,5.625rem)] rounded-full border-4 border-[#610213] mb-2 md:h-[5.625rem] md:w-[5.625rem]">
                <img src={iconMatcher(language)} className='w-[clamp(1.6rem,8vw,4rem)] md:w-[4rem]' alt="" />
            </div>
            <p className="font-oxanium text-[.8rem] md:text-xs">{language}</p>
        </article>
    );
};

export default TechStackItem;