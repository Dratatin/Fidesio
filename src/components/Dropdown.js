import { useState, useEffect, Fragment } from "react";
import button from '../assets/button.svg';
import icon from '../assets/icon.svg';

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
                <Fragment>
                    <h2 className="dropdown__title">{title}</h2>
                    <p className="dropdown__subtitle">{subtitle}</p>
                    <p className="dropdown__description">{description}</p>
                    <img className="dropdown__icon" src={icon}></img>
                    <img onClick={toogleExpand} className="dropdown__button" src={button}></img>
                </Fragment>
            )
                : null
            }
            <div onClick={toogleExpand} className={`${isExpended ? "dropdown__number--open" : null} dropdown__number`}>{index}</div>
        </div>
    )
}

export default Dropdown