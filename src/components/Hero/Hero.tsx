import HeroImage from "../../assets/hero-img/hero-image.svg";
import "./Hero.scss"

const Hero = () => {
    return (
        <div className="text-white px-[1rem] pb-10 pt-3 relative overflow-hidden w-full h-[90vw] md:h-[600px]">
            <div className="text-xs md:text-[2.5rem] xl:text-xl font-bebas mt-4 mb-4 md:mb-1 relative z-10 md:flex md:justify-center">
                <h1>SEAMLESS WEB SOLUTIONS</h1>
                <h1 className="pl-[25%] relative z-10 md:pl-[0.3rem]">BY FREELANCE FIENDS</h1>
            </div>
            <div className="font-oxanium mt-4 mb-4 relative z-10 md:text-[1.4rem] md:flex md:justify-center md:mt-1 xl:text-md">
                <h2 className="font-semibold md:font-[400] relative z-10">Empowering Businesses with</h2>
                <h2 className="font-extrabold md:font-[400] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 relative z-10 md:pl-[0.3rem] md:text-white">Fullstack Applications</h2>
            </div>
            <div className="font-oxanium text-xss md:text-[1.25rem] w-[100%] mt-4 mb-4 xl:pl-[6rem]">
                <p className="w-[40%] xl:w-[26%] relative z-10 md:flex md:flex-col ">
                    <span className="md:mt-4 md:mb-4 xl:mt-10">We believe that your services are best in the industry. </span> 
                    <span className="md:mt-4 md:mb-4">Trust us to make a website that matches your quality of work.</span>
                </p>
                <div className=" absolute top-[70px] md:top-[2%] right-[-95px] xl:right-[0px] z-1 bg-gradient-to-r rounded-full h-[70vw] md:max-h-[550px] xl:h-[550px] w-[70vw] md:max-w-[550px] xl:w-[550px] flex items-center overlay-hidden">
                    <div className="blur-lg bg-gradient-to-r rounded-full h-full w-full absolute" style={{ background: 'linear-gradient(90deg, rgb(96,10,182) 0%, rgb(96,10,182,0) 100%)' }}></div>
                    <img src={HeroImage} alt="Hero Image Person Programming" className="h-[50%] w-full z-1 absolute right-[60px]" />
                </div>
            </div>
            <button className="mt-8 mb-4 font-bebas w-[6.5rem] md:w-[11rem] h-[2rem] md:h-[3.5rem] rounded-lg bg-gradient-to-b md:text-sm xl:ml-[6rem] button" style={{ background: 'linear-gradient(180deg, rgb(52,1,91) 0%, rgb(90,1,178) 100%)' }}>GET STARTED</button>
        </div>
    );
};

export default Hero;
