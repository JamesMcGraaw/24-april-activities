import './styles.css';
const People = ({numPeople, getNumPeople}) => {
    return (
        <div className="people">
            <div>How many people eating?</div>
            <input name="number of people"  onChange={e =>
                getNumPeople(e.target.value)} value={numPeople} placeholder="How many diners"/>
        </div>
    )
}

export default People