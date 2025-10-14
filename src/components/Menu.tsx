import React from 'react';
import menuItems from '../data/menuItems';

const Menu = () => {
    return (
        <nav>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.label} className="my-4 uppercase font-bold text-link hover:text-link-hover">
                        <a href={item.href} className="text-sm font-sans">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;