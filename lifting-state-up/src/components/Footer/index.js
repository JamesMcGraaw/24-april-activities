import Button from "./Button";

const Footer = ({loggedIn}) => {
    return (
        <div>
            Footer
            <Button loggedIn={loggedIn}/>
        </div>
    )
}

export default Footer