function Bandeau({ items }) {
    return (
        <div className="bandeau-ctn">
            <div className="bandeau">
                {items.map((item, index) => (
                    <div key={index} className="paternaire">
                        <img src={item}></img>
                    </div>
                ))}
            </div>
            <div className="bandeau bandeau--duplicate">
                {items.map((item, index) => (
                    <div key={index} className="paternaire">
                        <img src={item}></img>
                    </div>
                ))}
            </div>
            <div className="bandeau bandeau--duplicate">
                {items.map((item, index) => (
                    <div key={index} className="paternaire">
                        <img src={item}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bandeau