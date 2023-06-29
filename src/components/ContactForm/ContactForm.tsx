const ContactForm = () => {
    return (
        <section className="relative h-[22.5rem] mt-[20px] md:w-[384px] xl:w-[650px]">
            <div className="flex align-middle justify-center w-auto">
                <div className="absolute z-0 mx-auto inset-0 xl:inset-auto w-[22.5rem] md:w-[637px] xl:w-[813px] h-[22.5rem] md:h-[637px] xl:h-[813px] rounded-full footer-gradient blur-md">
                </div>
                <form className="z-10 space-y-[1.25rem] md:space-y-[35px] absolute inset-y-[4.5rem] md:inset-y-[8rem] xl:inset-y-[10rem] md:inset-x-[7rem] xl:inset-x-[7rem]">
                    <input placeholder="Full name" type="text" className="flex h-[2.1875rem] md:h-[60px] w-[12.5rem] md:w-[239px] xl:w-[394px] xl:h-[80px] rounded-[0.625rem] md:rounded-[20px] xl:rounded-[30px] pl-[0.75rem] md:pl-[1.2rem] xl:pl-[1.6rem] pt-[0.4rem] xl:pt-[.8rem] font-oxanium placeholder:text-mainPurple md:placeholder:text-[20px] xl:placeholder:text-[25px] text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white "/>
                    <input placeholder="Email" type="email" className="flex h-[2.1875rem] md:h-[60px] w-[12.5rem] md:w-[239px] xl:w-[394px] xl:h-[80px] rounded-[0.625rem] md:rounded-[20px] xl:rounded-[30px] pl-[0.75rem] md:pl-[1.2rem] xl:pl-[1.6rem] pt-[0.4rem] xl:pt-[.8rem] font-oxanium placeholder:text-mainPurple md:placeholder:text-[20px] xl:placeholder:text-[25px] text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white"/>
                    <textarea placeholder="Message" className="flex h-[5rem] md:h-[150px] w-[12.5rem] md:w-[239px] xl:w-[394px] xl:h-[202px] rounded-[0.625rem] md:rounded-[20px] xl:rounded-[30px] pl-[0.75rem] md:pl-[1.2rem] xl:pl-[1.6rem] pt-[0.7rem] md:pt-[.85rem] xl:pt-[1.4rem] font-oxanium placeholder:text-mainPurple md:placeholder:text-[20px] xl:placeholder:text-[25px] text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white"/>
                    <div className="flex justify-center">
                        <button className="bg-formbutton rounded-md pt-[0.1rem] px-[1rem] text-white font-bebas text-button w-[7rem] md:w-[163px] xl:w-[248px] md:h-[52px] xl:h-[78px] md:text-[24px] xl:text-[35px] border-solid border-[1px] border-white hover:border-[2px] hover:bg-borderPurple md:absolute md:inset-x-[2.35rem] xl:inset-x-[4.5rem]">
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;