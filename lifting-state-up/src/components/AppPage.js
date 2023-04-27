import Page from "./Page";
import {useState} from "react";
import page from "./Page";

const AppPage = () => {
    const [pageActive, setPageActive] = useState(true)
    return (
        <>
        <button onClick={() => setPageActive(!pageActive)}>Click me!</button>
        {pageActive ? <Page /> : '404 not found'}
        </>
    )
}

export default AppPage
