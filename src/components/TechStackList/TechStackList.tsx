import TechStackItem from "../TechStackItem/TechStackItem";

const TechStackList = (tech_stack:string[]) => {
    const languages = Object.values(tech_stack)
    return (
        <div className="flex  grid-cols-6 gap-2 md:gap-6 xl:grid xl:grid-cols-3 xl:grid-rows-2 ">
            {languages.map(language =>{
                return <TechStackItem language={language}/>
            })}
          
        </div>
    );
};

export default TechStackList;