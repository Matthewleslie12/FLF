import React from 'react';

const Hero = () => {
    return (
        <div className="text-white px-[1rem]">
            <div className="text-xs font-bebas mt-4 mb-4">
                <h1>SEAMLESS WEB SOLUTIONS</h1>
                <h1 className="pl-[25%]">BY FREELANCE FIENDS</h1>
            </div>
            <div className="font-oxanium mt-4 mb-4">
                <h2 className="font-semibold">Empowering Businesses with</h2>
                <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">Fullstack Applications</h2>
            </div>
            <div className="font-oxanium text-xss w-[40%] mt-4 mb-4">
                <p>We believe that your services are best in the industry. Trust us to make a website that matches your quality of work.</p>
                <p></p>
            </div>
            <button className="mt-4 mb-4 font-bebas w-[6.5rem] h-[2rem] rounded-lg bg-gradient-to-b" style={{ background: 'linear-gradient(180deg, rgb(52,1,91) 0%, rgb(90,1,178) 100%)' }}>GET STARTED</button>
        </div>
    );
};

export default Hero;
