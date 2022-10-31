import { useEffect, useState } from 'react';
import Dropdown from './Dropdown.js';

function Dropdowns({ items }) {
    return (
        <section>
            {items.map(({ title, subtitle, description }, index) => (
                <Dropdown key={index} index={index + 1} title={title} subtitle={subtitle} description={description}></Dropdown>
            ))}
        </section>
    )
}

export default Dropdowns