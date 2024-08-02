import {createRoot} from 'react-dom/client';
import "../index.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const AppLayout=()=>{
    return(
        <div className="app-container">
         <Header/>
          <Body/>
         <Footer/>
        </div>
    )
}

const root=createRoot(document.getElementById('root'));

root.render(<AppLayout/>)




