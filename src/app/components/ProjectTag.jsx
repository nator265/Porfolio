import React from 'react'

const ProjectTag = ({ name, onClick,isSelected}) => {
    const buttonStyles = isSelected ? "text-white border-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white transition ease-in-out delay-20"
  return (
    <button className={`${buttonStyles} rounded-full mb-5 mx-1 border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}

export default ProjectTag