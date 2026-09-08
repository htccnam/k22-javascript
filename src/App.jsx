import { useState } from "react";
import "./App.css";
import "./reset.css";
import Bai1 from "./components/Bai1.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app-container">
            <Bai1 />
        </div>
    );
}

export default App;
