import react from '../../assets/Tech-icons/react.png';
import tailwind from '../../assets/Tech-icons/tailwind-css.svg';
import typescript from '../../assets/Tech-icons/Typescript_logo_2020.svg.png';
import post from '../../assets/Tech-icons/Postgresql_elephant.svg.png';
import PingPong from '../PingPong/PingPong';
import penguin from '../../assets/Tech-icons/oie_4t1L8VhfL5Es.png'

const Footer = () => {
    return (
        <section className=" text-xs px-[1.5rem] md:px-[50px] footer-gradient-2 py-[3rem] mt-[1.5rem] md:mt-[3rem] xl:px-0">
            <div className='flex flex-col xl:max-w-[1280px] xl:mx-auto xl:px-[68px]'>
                <div className='flex justify-between md:justify-normal align-middle w-[312px] md:w-[100%] mx-auto'>
                    <h1 className="flex text-white font-bebas items-end md:text-[40px] xl:text-[50px]">
                        THANKS FOR VISITING
                    </h1>
                    <img src={penguin} alt="" className="absolute left-[calc(50%+3.75rem)] inset-y-[38rem] md:inset-x-[22rem] md:inset-y-[39rem] md:w-[150px] xl:inset-y-[46rem] xl:left-[calc(50%-13rem)] xl:w-[225px]"></img>
                </div>
                <div className="flex flex-col space-y-2 w-[312px] md:flex-row md:w-[100%] md:mx-auto md:justify-between mx-auto">
                    <div className="flex w-[312px] xl:w-[750px] h-[80px] xl:h-[200px] mt-5 align-middle">
                        <PingPong />
                    </div>
                    <div className="flex md:w-[312px] h-[80px] xl:h-[200px]">
                        <div className="flex flex-col justify-end md:space-y-3">
                            <span className="flex text-[12px] text-white leading-[40px] md:text-[20px] align-middle justify-center font-oxanium">
                                Website Designed with
                            </span>
                            <div className="flex flex-row justify-between w-[312px] mx-auto">
                                <img src={react} alt="React Logo" className="w-[50px] aspect-[4/3] object-contain" />
                                <img src={tailwind} alt="React Logo" className="w-[50px] aspect-[4/3] object-contain" />
                                <img src={typescript} alt="React Logo" className="w-[50px] aspect-[4/3] object-contain" />
                                <img src={post} alt="React Logo" className="w-[50px] aspect-[4/3] object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;