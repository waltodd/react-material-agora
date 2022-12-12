import { Footer,Header, Home, HeroeDetails} from "./componets";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const  App =() =>(
  <BrowserRouter>
  <Header />
    <Routes>
      
      <Route exact path='/' element={<Home />} />
      <Route exact path='/:id' element={<HeroeDetails />} />
    
    </Routes>
    <Footer />
  </BrowserRouter>
  );


export default App;
