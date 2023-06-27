import react from '../../assets/Tech-icons/react.png';
import tailwind from '../../assets/Tech-icons/tailwind-css.svg';
import typescript from '../../assets/Tech-icons/Typescript_logo_2020.svg.png';
import post from '../../assets/Tech-icons/Postgresql_elephant.svg.png';
import PingPong from '../PingPong/PingPong';
import penguin from '../../assets/Tech-icons/oie_4t1L8VhfL5Es.png'

const Footer = () => {
    return (
        <section className="flex-col footer-gradient-2 text-xs px-[1.5rem] py-[1.5rem] mt-[40px]">
            <div className='flex justify-between align-middle'>
                <h1 className="flex text-white font-bebas items-end">
                    THANKS FOR VISITING
                </h1>
                <img src={penguin} alt="" className=""></img>
            </div>
            <div className="flex-col justify-evenly space-y-6 ">
                <div className="w-[100%] h-[80px] flex justify-center items-center mt-10">
                    <PingPong />
                </div>
                <div className="w-[100%] h-[80px] ">
                    <div className="flex-col">
                        <span className="flex text-[12px] text-white leading-[40px] align-middle justify-center font-oxanium">
                            Website Designed with
                        </span>
                        <div className="flex flex-row justify-between">
                            <img src={react} alt="React Logo" className="w-[78px] aspect-[4/3] object-contain" />
                            <img src={tailwind} alt="React Logo" className="w-[78px] aspect-[4/3] object-contain" />
                            <img src={typescript} alt="React Logo" className="w-[78px] aspect-[4/3] object-contain" />
                            <img src={post} alt="React Logo" className="w-[78px] aspect-[4/3] object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;