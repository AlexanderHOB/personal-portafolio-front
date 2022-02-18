import Home from "./Main/Home";
import About from "./Main/About";
import Skills from "./Main/Skills";
import Work from "./Main/Work";
import Qualification from "./Main/Qualification";
import Contact from "./Main/Contact";




const Main = ()=>{
    
    return (
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Qualification/>
            <Contact/>
        </main>
    );
}

export default Main;