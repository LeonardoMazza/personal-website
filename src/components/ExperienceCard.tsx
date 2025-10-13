const ExperienceCard = () => {
    return (
        <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="max-w-6xl mt-4 p-6 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex-shrink-0">
                        <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Experience Title</h2>
                        <p className="mt-2 text-gray-600">Description of the experience.</p>
                        <ul>
                            <li className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Javascript
                            </li>
                            <li className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                PHP
                            </li>
                            <li className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Python
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ExperienceCard;
