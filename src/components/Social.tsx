import React from 'react';
import { Github, Instagram, Link, Linkedin } from 'lucide-react';

const Social = () => {
  return (
    <div className="text-text">
        <ul className="flex space-x-4">
            <li className="text-link hover:text-link-hover transition-colors duration-300">
                <a href="https://github.com/leonardomazza" target="_blank" rel="noopener noreferrer">
                    <Github size={24} />
                </a>
            </li>
            <li className="text-link hover:text-link-hover transition-colors duration-300">
                <a href="https://www.linkedin.com/in/leonardo-mazza-886162128/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} />
                </a>
            </li>
            <li className="text-link hover:text-link-hover transition-colors duration-300">
                <a href="https://www.instagram.com/leo.mazza9" target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} />
                </a>
            </li>
        </ul>
    </div>
  );
};

export default Social;