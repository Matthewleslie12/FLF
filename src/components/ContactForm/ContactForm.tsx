const ContactForm = () => {
    return (
        <section className="relative w-auto h-[22.5rem] mt-[20px]">
            <div className="flex align-middle justify-center w-auto">
                <div className="absolute z-0 mx-auto inset-0 w-[22.5rem] h-[22.5rem] rounded-full footer-gradient blur-md">
                </div>
                <form className="z-10 space-y-[1.25rem] absolute inset-y-[4.5rem]">
                    <input placeholder="Full name" type="text" className="flex h-[2.1875rem] w-[12.5rem] rounded-[0.625rem] pl-[0.75rem] pt-[0.4rem] font-oxanium placeholder:text-mainPurple text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white "/>
                    <input placeholder="Email" type="email" className="flex h-[2.1875rem] w-[12.5rem] rounded-[0.625rem] pl-[0.75rem] pt-[0.4rem] font-oxanium placeholder:text-mainPurple text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white"/>
                    <input placeholder="Message" type="text" className="flex h-[5rem] w-[12.5rem] rounded-[0.625rem] pl-[0.75rem] pt-[0.4rem] font-oxanium placeholder:text-mainPurple text-xss outline-none focus:outline-solid focus:outline-3 focus:outline-white"/>
                    <div className="flex justify-center">
                        <button className="bg-formbutton rounded-md py-[0.4375rem] px-[1rem] text-white font-bebas text-button w-[7rem] border-solid border-[1px] border-white hover:border-[2px] hover:bg-borderPurple">
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
            {/* <div className="w-80 h-96 relative">         
                <div className="absolute inset-0 z-0">           
                    <div className="blur-lg landing-gradient rounded-full h-52 w-52 z-0 mx-auto">
                    </div>         
                </div>          
                <div className="absolute inset-0 z-10">           
                    <div className="text-white text-2xl text-center z-50 ">Test</div>         
                </div>       
            </div> */}
        </section>
    );
};

export default ContactForm;