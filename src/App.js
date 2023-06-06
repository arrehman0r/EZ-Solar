
import './App.css';
import ContactCard from './Components/ContactCard/ContactCard';
import Example from './Components/Hero/Hero';
import Slider from './Components/Slider/Slider';
import {Footer} from './Components/Footer/Footer'
import { BlogsSection } from './Components/BlogsCard/BlogsSection';


function App() {
  return (
    
    <>
    <Example/>
    <Slider/>
   <BlogsSection/>
    <ContactCard/>
    <Footer/>
    
    </>
  );
}

export default App;
