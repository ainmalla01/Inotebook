// import logo from './logo.svg';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Routers from './router/router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
 <>
 <BrowserRouter>
 <Header/>
 <div className=' flex gap-2'>
 <Sidebar/>

 {/* roteer  design*/}
<Routers/>

  </div>
  </BrowserRouter>
 </>
  );
}

export default App;
