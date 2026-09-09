import { useState } from "react";
import "./App.css";
import "./reset.css";
import Sesson1 from "./components/sesson1/sesson1";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app-container">
            <Sesson1 />
        </div>
    );
}

export default App;
