import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {useState} from "react";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <>
            <Header loggedIn={loggedIn} />
            <Content/>
            <Footer loggedIn={loggedIn} />
        </>
    );
}

export default App;
