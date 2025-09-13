// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { fadeInUpVariants } from "../../../utils/onScrollAnimtions";

const ProjectsHeader = ({ projects, selectedProject, handleProjectSelect }) => {
  return (
    <motion.div className="w-full mx-auto flex justify-center items-center overflow-hidden"
      variants={fadeInUpVariants}
    >
      <div className="flex items-center justify-center gap-4 w-max mx-auto py-8 transition-transform duration-500" style={{ minWidth: 0 }}>
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => handleProjectSelect(index)}
            className={`w-full min-w-28 flex flex-col items-center justify-center py-3 px-6 rounded-xl space-y-2 transition-all duration-300 ease-in-out bg-white sm:min-w-40 ${selectedProject === index ? 'shadow-glow -translate-y-2 z-10' : 'translate-y-0 hover:shadow-glow opacity-80'}`}
          >
            <div className="h-10 w-auto mx-auto flex items-center justify-center">
              <img src={project.logo} className="h-full w-auto" alt={project.title} />
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsHeader