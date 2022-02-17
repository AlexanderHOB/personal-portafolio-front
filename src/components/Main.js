import Home from "./Home";
import About from "./About";
import Skills from "./Main/Skills";
import Work from "./Main/Work";
import Qualification from "./Main/Qualification";



const Main = ()=>{
    
    return (
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Qualification/>
        </main>
    );
}

export default Main;