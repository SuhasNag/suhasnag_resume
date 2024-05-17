import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
