import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Loginform from './Loginform.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Homepage.jsx';



createRoot(document.getElementById('root')).render(
    <>
        {/* <App /> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loginform />}></Route>
                <Route path="/app" element={<App />} />
                <Route path="/header" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
    </>
 

)
