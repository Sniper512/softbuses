// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Bar = () => {
  // Generate a random delay between 4 and 20 seconds for each instance
  const randomDelay = (Math.random() * 16) + 4;

  const barVariants = {
    hidden: {
      opacity: 0,
      width: 0,
    },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <>
      <div className="relative">
        <motion.hr
          className="h-[1px] border-0 w-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"
          initial="hidden"
          animate="visible"
          variants={barVariants}
        />
        <hr
          className="absolute -top-[1px] h-[2px] w-1/12 border-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 shadow-glow animate-bar-left-right rounded-[100%]"
          style={{ animationDelay: `${randomDelay}s` }}
        />
      </div>
    </>
  )
}

export default Bar