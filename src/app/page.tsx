import React from 'react';
import Header from '../components/Header';
import About from '../components/About';


export default function Home() {
  return (
    <>
		<div className="max-w-6xl mx-auto py-10">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Header />
				<About />
			</div>
		</div>
    </>
  );
}
