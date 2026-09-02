// function exports the project card component with the image and description of project 
// clicking onto card will take you to the project page

'use client'

import { motion } from 'framer-motion'

export default function ProjectCard() {
  return (
    <button className="cursor-pointer w-full text-left">
      <div className="overflow-hidden shadow-lg">
        <motion.div
          className="w-full aspect-[4/3] bg-gray-200 text-black flex items-center justify-center"
          whileHover={{ scale: 1.02, y: -8 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          temporary, image cover
        </motion.div>
        <div className="py-4 px-0 text-left">
          <h3 className="text-lg font-bold text-white">Project Title</h3>
          <p className="text-white">Project description goes here.</p>
        </div>
      </div>
    </button>

  );
}