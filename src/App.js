import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
