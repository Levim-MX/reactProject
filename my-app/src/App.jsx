

import Header from './Header.jsx';
import FQA from './FQA.jsx';
import Home from './Home.jsx';
import ServicesContent from './ServicesContent.jsx';
import Home2 from './Home2.jsx';
import Footer from './Footer.jsx';
import AboutUs from './AboutUs.jsx';

import './app.css';



function App() {

  return (
   
        
      <>
     <Header /> 
     
     <Home/>
     <div className='FqaHome2'>
     <Home2/>
     <FQA />
     
     </div>

     <ServicesContent/>
     <AboutUs/>
     
     <div className='App'>
     
      <Footer/>
      </div>
      </>
        
  );

}


export default App
