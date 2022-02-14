import "./App.css";
import Tetris from "./components/Tetris/Tetris";
import { AppStyle } from "./AppStyle";
import Navbar from "./components/Navbar/Navbar";

const App = () => (
    <AppStyle>
        <Navbar />
        <Tetris />
    </AppStyle>
);

export default App;
