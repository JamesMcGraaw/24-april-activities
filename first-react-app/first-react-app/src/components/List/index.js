const List = () => {
    const items = ['Bananas', 'Peanut butter', 'Jaffa cakes', 'Bleach']

    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

export default List