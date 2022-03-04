import "./App.css";
import Tetris from "./components/Tetris/Tetris";
import { AppStyle } from "./AppStyle";
import Navbar from "./components/Navbar/Navbar";
import Login from './components/login/login';

const App = () => (
    <AppStyle>
        <Navbar />
        <Login />
        {/* <Tetris /> */}
    </AppStyle>
);

export default App;
