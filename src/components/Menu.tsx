import React from 'react';

const Menu = () => {
    return (
        <nav className="mt-8">
            <ul>
                <li>
                    <a href="#about" className="text-lg hover:underline">About</a>
                </li>
                <li>
                    <a href="#experience" className="text-lg hover:underline">Experience</a>
                </li>
                <li>
                    <a href="#projects" className="text-lg hover:underline">Projects</a>
                </li>

            </ul>
        </nav>
    );
};

export default Menu;