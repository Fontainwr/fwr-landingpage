import "./App.css";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Work from "./Componets/Work";
import Testimonial from "./Componets/Testimonial";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
