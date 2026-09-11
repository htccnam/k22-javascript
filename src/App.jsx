import { useState } from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Sesson1 from "./components/sesson1/sesson1";
import Sesson2 from "./components/sesson2/Sesson2";

function App() {
    const [activateSection, setActivateSection] = useState("sesson1");
    return (
        <div className="app-container">
            <Header onSectionChange={setActivateSection} />
            {activateSection === "sesson1" && <Sesson1 />}
            {activateSection == "sesson2" && <Sesson2 />}
        </div>
    );
}

export default App;
