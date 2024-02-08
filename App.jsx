
import { Route,Routes } from "react-router-dom";
import { Header } from "./Components/header/Header"
import Footer from "./Components/recycle/Footer";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

import "./Components/header/header.css"
import { useGlobalContext } from "./Components/utils/global.context";


function App() {
  // const{stateTheme} = useGlobalContext()
  return (
    <div className='App'>
      <div className='content-wrap'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;