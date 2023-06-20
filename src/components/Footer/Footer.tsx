import react from '../../assets/Tech-icons/react.png';
import tailwind from '../../assets/Tech-icons/tailwind-css.svg';
import typescript from '../../assets/Tech-icons/Typescript_logo_2020.svg.png';
import post from '../../assets/Tech-icons/Postgresql_elephant.svg.png';
import PingPong from '../PingPong/PingPong';

const Footer = () => {
    return (
        <section className="flex-col footer-gradient-2 text-xs px-[1.5rem] py-[1.5rem] mt-[40px]">
            <h1 className="text-white font-bebas my-3">
                THANKS FOR VISITING
            </h1>
            <div className="flex justify-evenly ">
                <div className="w-[50%] h-[80px] flex justify-center items-center">
                    <PingPong />
                </div>
                <div className="w-[50%] h-[80px] ">
                    <div className="flex-col">
                        <span className="flex text-[12px] text-white leading-[40px] align-middle justify-center font-oxanium">
                            Website Designed with
                        </span>
                        <div className="flex flex-row justify-between">
                            <img src={react} alt="React Logo" className="w-[25%] aspect-[4/3] object-contain" />
                            <img src={tailwind} alt="React Logo" className="w-[25%] aspect-[4/3] object-contain" />
                            <img src={typescript} alt="React Logo" className="w-[25%] aspect-[4/3] object-contain" />
                            <img src={post} alt="React Logo" className="w-[25%] aspect-[4/3] object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;