import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import FirstPage from "./pages/FirstPage"
import SecondPage from "./pages/SecondPage"
import ThirdPage from "./pages/ThirdPage"
import ForthyPage from "./pages/FourthyPage"

function Routes(){
    return(
        <BrowserRouter>
        
        <Route path="/" exact component={FirstPage}/>
        <Route path="/SegundaFase" component={SecondPage}/>
        <Route path="/TerceiraFase" component={ThirdPage}/>
        <Route path="/QuartaFase" component={ForthyPage}/>
        </BrowserRouter>
    )
}

export default Routes