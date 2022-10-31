import { useState, useEffect } from "react";
import button from '../assets/button.svg';

function Dropdown({ title, subtitle, description, index }) {
    const [isExpended, setIsExpended] = useState(false);

    const toogleExpand = () => {
        setIsExpended(!isExpended)
    }
    useEffect(() => {
        if (index === 1) {
            setIsExpended(true)
        }
    }, [])
    return (
        <div className={`${isExpended ? "dropdown--open" : null} dropdown`}>
            {isExpended ? (
                <div className="dropdown__content">
                    <h2 className="dropdown__content__title">{title}</h2>
                    <p className="dropdown__content__subtitle">{subtitle}</p>
                    <p className="dropdown__content__description">{description}</p>
                    <img onClick={toogleExpand} className="dropdown__content__button" src={button}></img>
                </div>
            )
                : null
            }
            <div onClick={toogleExpand} className={`${isExpended ? "dropdown__number--open" : null} dropdown__number`}>{index}</div>
        </div>
    )
}

export default Dropdown