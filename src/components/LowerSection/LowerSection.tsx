import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import WorkWithUs from "../WorkWithUs/WorkWithUs";

const LowerSection = () => {
    return (
        <section className="flex-col relative overflow-hidden">
            <div className="flex flex-col md:flex md:flex-row md:h-[637px] xl:h-[813px] md:justify-between xl:max-w-[1280px] xl:mx-auto">
                <WorkWithUs />
                <ContactForm />
            </div>
            <Footer />
        </section>
    )
}

export default LowerSection;