const ContactForm = () => {
    return (
        <section className="relative w-auto h-[22.5rem] mt-[20px] md:w-[384px]">
            <div className="flex align-middle justify-center w-auto">
                <div className="absolute z-0 mx-auto inset-0 w-[22.5rem] md:w-[637px] h-[22.5rem] md:h-[637px] rounded-full footer-gradient blur-md">
                </div>
                <form className="z-10 space-y-[1.25rem] md:space-y-[35px] absolute inset-y-[4.5rem] md:inset-y-[8rem] md:inset-x-[5.7rem]">
                    <input placeholder="Full name" type="text" className="flex h-[2.1875rem] md:h-[60px] w-[12.5rem] md:w-[239px] rounded-[0.625rem] md:rounded-[20px] pl-[0.75rem] pt-[0.4rem] font-oxanium placeholder:text-mainPurple text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white "/>
                    <input placeholder="Email" type="email" className="flex h-[2.1875rem] md:h-[60px] w-[12.5rem] md:w-[239px] rounded-[0.625rem] md:rounded-[20px] pl-[0.75rem] pt-[0.4rem] font-oxanium placeholder:text-mainPurple text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white"/>
                    <input placeholder="Message" type="text" className="flex h-[5rem] md:h-[150px] w-[12.5rem] md:w-[239px] rounded-[0.625rem] md:rounded-[20px] pl-[0.75rem] pt-[0.4rem] font-oxanium placeholder:text-mainPurple placeholder:align-top text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white"/>
                    <div className="flex justify-center">
                        <button className="bg-formbutton rounded-md py-[0.4375rem] px-[1rem] text-white font-bebas text-button w-[7rem] border-solid border-[1px] border-white hover:border-[2px] hover:bg-borderPurple md:absolute md:inset-x-[4rem]">
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;