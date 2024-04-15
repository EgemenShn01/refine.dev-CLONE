import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { PrimeReactProvider } from 'primereact/api';
import Examples from "./components/Examples";
import Developers from "./components/Developers";
import About from "./components/About";
import Slick from "./components/Slick";
import EnterPrise from "./components/Enterprise";
import Community from "./components/Community";
import Comments from "./components/Comments";
import Started from "./components/Started";
import Footer from "./components/Footer";



const App = () =>{
  return (
        <PrimeReactProvider>
        <div className="bg-[#14141f] overflow-hidden">
        <Navbar/>   
               <Home/> 
               <Examples/>
               <Developers/>
               <About/>
               <Slick/>
               <EnterPrise/>
               <Community/>
               <Comments/>
               <Started/>
               <Footer/>
        </div>
                
        </PrimeReactProvider>
  )
};

export default App;


  
