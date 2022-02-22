import React,{useEffect} from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ScrollReveal from 'scrollreveal';

function App() {

  const sr = ScrollReveal({
    origin: 'top',
    display: '60px',
    duration:2500,
    delay:400
  });

  

useEffect(()=>{
  sr.reveal(`.Home_home__data__jhayI`);
  sr.reveal(`.Home_home__handle__VXOwu`,{delay:700});
  sr.reveal(`.Home_home__social__g7JBN, .Home_home__scroll__JvWyc`,{delay:900,origin:'bottom'});
},[])

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
