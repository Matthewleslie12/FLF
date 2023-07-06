import HeroImage from "../../assets/hero-img/hero-image.svg";
import "./Here.scss"

const Hero = () => {
    return (
        <div className="text-white px-[1rem] pb-10 relative overflow-hidden w-full">
            <div className="text-xs font-bebas mt-4 mb-4 relative z-10">
                <h1>SEAMLESS WEB SOLUTIONS</h1>
                <h1 className="pl-[25%] relative z-10">BY FREELANCE FIENDS</h1>
            </div>
            <div className="font-oxanium mt-4 mb-4  relative z-10">
                <h2 className="font-semibold  relative z-100">Empowering Businesses with</h2>
                <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700  relative z-10">Fullstack Applications</h2>
            </div>
            <div className="font-oxanium text-xss w-[100%] mt-4 mb-4">
                <p className="w-[40%] relative z-10">We believe that your services are best in the industry. Trust us to make a website that matches your quality of work.</p>
                <div className=" absolute top-0 right-[-95px] z-1 bg-gradient-to-r rounded-full h-[300px] w-[300px] flex items-center overlay-hidden">
                    <div className="blur bg-gradient-to-r rounded-full h-full w-full absolute" style={{ background: 'linear-gradient(90deg, rgb(96,10,182) 0%, rgb(96,10,182,0) 100%)' }}></div>
                    <img src={HeroImage} alt="Hero Image Person Programming" className="h-[50%] w-full z-1 absolute right-[60px]" />
                </div>
                {/* <div className=" absolute z-1 bg-gradient-to-r rounded-full h-[300px] w-[300px] flex items-center overlay-hidden">
                    <div className="blur bg-gradient-to-r rounded-full h-full w-full absolute top-[-65%] right-[-80%]" style={{ background: 'linear-gradient(90deg, rgb(96,10,182) 0%, rgb(96,10,182,0) 100%)' }}></div>
                    <img src={HeroImage} alt="Hero Image Person Programming" className="h-[50%] w-full z-1 absolute top-[-45%] right-[-60%]" />
                </div> */}
            </div>
            <button className="mt-4 mb-4 font-bebas w-[6.5rem] h-[2rem] rounded-lg bg-gradient-to-b" style={{ background: 'linear-gradient(180deg, rgb(52,1,91) 0%, rgb(90,1,178) 100%)' }}>GET STARTED</button>
        </div>
    );
};

export default Hero;
