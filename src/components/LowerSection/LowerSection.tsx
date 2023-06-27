import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import WorkWithUs from "../WorkWithUs/WorkWithUs";

const LowerSection = () => {
    return (
        <section className="flex-col relative overflow-hidden">
            <div className="flex-col md:flex md:flex-row">
                <WorkWithUs />
                <ContactForm />
            </div>
            <Footer />
        </section>
    )
}

export default LowerSection;