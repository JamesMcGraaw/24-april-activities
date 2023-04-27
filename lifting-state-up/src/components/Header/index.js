const Header = ({loggedIn}) => {
    return (
        <div>
            <h3>Header</h3>
            {loggedIn ? 'Welcome back!' : 'Welcome stranger!'}
        </div>)
}

export default Header