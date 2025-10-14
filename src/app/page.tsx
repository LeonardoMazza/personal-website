import React from 'react';
import SideLeft from '../components/SideLeft';
import SideRight from '../components/SideRight';


export default function Home() {
  return (
    <>
		<div className="max-w-6xl mx-auto font-sans">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 p-6 md:p-12 lg:p-0">
				<SideLeft />
				<SideRight />
			</div>
		</div>
    </>
  );
}
