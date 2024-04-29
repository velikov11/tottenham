// eslint-disable-next-line no-unused-vars
import React from "react"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Team from "./Components/Team/Team.jsx";
import NavDown from "./Components/Navbar-down/nav-down.jsx";

const App = () => {
    return (
        <div>
    <Navbar></Navbar>
            <Team></Team>
            <NavDown></NavDown>
        </div>
    )
}
export default App;