const Button = ({loggedIn}) => {
    return (
        <div>
            Button
            {loggedIn ? 'Welcome back!' : 'Welcome stranger!'}
        </div>
    )
}

export default Button