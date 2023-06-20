import NavBar from "../components/Nav/NavBar";
import ContactForm from "../components/ContactForm/ContactForm";
import WorkWithUs from "../components/WorkWithUs.tsx/WorkWithUs";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="">
      <NavBar />
      <WorkWithUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
