import React, { useEffect } from "react";
import { IoOpenOutline } from "react-icons/io5";

import { IoCloseCircleOutline } from "react-icons/io5";





const Drawer = ({ children, isOpen, onClose, projectLink }) => {

    useEffect(() => {
        // Disable body scroll when the drawer is open
        if (isOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
        // Cleanup
        return () => document.body.classList.remove('no-scroll');
      }, [isOpen]);
    
      
	return (
		<div className='relative'>
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-80 z-20 backdrop-blur-sm  " 
            onClick={onClose}
            ></div>}
			<div
				className={`fixed top-0 right-0  md:right-0 h-full w-[390px] md:w-[550px] bg-white text-black transition duration-700 ease-in-out transform z-50 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : ""}` }}
			>
				<aside className='h-full overflow-y-auto'>
                <IoCloseCircleOutline className=" relative top-4 left-5 text-3xl font-bold"
                onClick={onClose}
                />
				

                <div className='mt-[40px] mx-auto w-[91%] flex justify-center items-center h-[1px] bg-gray-200'></div>

                
					
					<main className='bg-transparent p-4 text-black'>{children}</main>

                    <div className="h-16 bg-black  fixed bottom-0 w-full flex justify-center  ">
                        <a className=" hover:underline text-gray-100 flex gap-2" href={projectLink}>
                            
                        <p className=" text-gray-100 text-center mt-4 text-sm font-bold">Open Project</p>
                        <IoOpenOutline className=" text-gray-100 mt-[17px] " />
                        </a>
                    </div>
				</aside>
			</div>
		</div>
	);
};

export default Drawer;