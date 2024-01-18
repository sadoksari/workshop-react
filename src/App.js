

import NavBar from "./NavBar";
import Sliders from "./Carousel"

function App() {
  return (
    <div className="App">

       <h1> Ceci est un exemple de carousels </h1>

       <div>       
          <NavBar/>          
       </div>


       <div classmat="Carousel">
          <Sliders/>
       </div> 

    </div>
    
  );
}

export default App;
