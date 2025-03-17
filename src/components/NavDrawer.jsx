import React from "react";
import {AiFillCloseSquare}  from 'react-icons/ai'

const Drawer = ({ children, isOpen, onClose }) => {
	return (
		<div className='relative'>
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-90 z-20 backdrop-blur-sm " ></div>}
			<div
				className={`fixed top-0 right-0  md:right-0 h-full w-[280px] md:w-[658px] bg-white text-black transition duration-700 ease-in-out transform z-50 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : ""}` }}
			>
				<aside className='h-full overflow-y-auto'>
				<button onClick={onClose} className="absolute flex top-2 right-2 text-teal-700 text-2xl">
				<span className=" sr-only">Close</span>
					<AiFillCloseSquare className="mt-1"/>
					</button>
					
					<main className='bg-transparent p-4 mt-6 text-black'>{children}</main>
				</aside>
			</div>
		</div>
	);
};

export default Drawer;