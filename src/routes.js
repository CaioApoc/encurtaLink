import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Links from "./pages/Links"
import Error from "./pages/Error"

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exacl path="/" element={<Home/>} />
                <Route exacl path="links" element={<Links/>}/>
                <Route exacl path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default RoutesApp;