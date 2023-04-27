import Button from "./Button";

const Footer = ({loggedIn, toggleLoggedIn}) => {
    return (
        <div>
            <Button loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn}/>
        </div>
    )
}

export default Footer