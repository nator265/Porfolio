import React from 'react'

const Footer = () => {
  return (
    <footer className='footer absolute  w-full left-0 z-3 bg-black bg-opacity-100 border border-t-[#13206100] border-l-transparent border-r-transparent border-b-transparent text-white'>
        <div className="relative bg-black w-full bg-opacity-70">
            <div className='container py- flex justify-between w-full relative bg-black bg-opacity-60 z-3'>
                {/* <span> LOGO </span> */}
                {/* <p className='text-slate-600'> All rights reserved </p> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer