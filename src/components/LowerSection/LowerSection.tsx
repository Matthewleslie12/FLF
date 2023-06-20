import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import WorkWithUs from "../WorkWithUs.tsx/WorkWithUs";
import penguin from '../../assets/Tech-icons/Hotpot 1.png'

const LowerSection = () => {
    return (
        <section className="flex-col relative">
            <WorkWithUs />
            <ContactForm />
            <Footer />
            <img src={penguin} alt="" className="absolute bg-transparent bottom-[9%] left-[51%]"></img>
        </section>
    )
}

export default LowerSection;