const Button = ({loggedIn, toggleLoggedIn}) => {
    return (
        <button onClick={toggleLoggedIn}>
            {loggedIn ? 'LogOut' : 'Login'}
        </button>
    )
}

export default Button