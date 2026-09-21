import { useState } from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Sesson1 from "./components/sesson1/Sesson1";
import Sesson2 from "./components/sesson2/Sesson2";
import Sesson11 from "./components/sesson11/Sesson11";
import Sesson12 from "./components/sesson12/Sesson12";

function App() {
    const [activateSection, setActivateSection] = useState("sesson1");
    return (
        <div className="app-container">
            <Header onSectionChange={setActivateSection} />
            {activateSection === "sesson1" && <Sesson1 />}
            {activateSection == "sesson2" && <Sesson2 />}
            {activateSection == "sesson11" && <Sesson11 />}
            {activateSection == "sesson12" && <Sesson12 />}
        </div>
    );
}

export default App;
