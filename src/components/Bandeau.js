function Bandeau({ items }) {
    return (
        <div className="bandeau">
            {items.map((item, index) => (
                <div key={index} className="paternaire">
                    <img src={item}></img>
                </div>
            ))}
        </div>
    )
}

export default Bandeau