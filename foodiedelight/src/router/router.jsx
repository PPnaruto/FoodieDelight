import {Routes, Route} from "react-router-dom"
import Admin from "../components/Admin"
import Home from "../components/Home"

const Router = () =>{
    return(
        <Routes>   
            <Route path="/" element={<Admin/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}

export default Router