import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Footer from "@/components/Footer";

const SectionPage = () => {
   return (
      <div className="">
         <Introduction
            name="Ali Modasser Nayem"
            title={["Full-Stack Developer, Software Developer"]}
            description="I work with Full-Stack Stack development. So I can work with Frontend and Backend of any website."
            resume="dfg"
            image="dsg"
            facebook="https://web.facebook.com/alimodassernayem"
            linkedin="https://www.linkedin.com/in/alimodassernayem/"
            github="https://github.com/modasser-nayem"
         />
         <About />
         <Skills />
         <Projects />
         <Services />
         {/* <Blogs />
         <Testimonial /> */}
         <Contact />
         <Footer />
      </div>
   );
};

export default SectionPage;
