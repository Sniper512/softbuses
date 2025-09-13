import { servicesAvailable } from "../../../assets/sectionsData";
import { FaCircleDot } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router";


export const ServicesSections = () => {
  const serviceCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full flex items-center justify-center z-[1]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ~gap-4/8">
        {servicesAvailable.map((item, index) => (
          <motion.div
            key={index}
            className="group w-full"
            variants={serviceCardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}>
            <Link to={item.link} className="z-10 border-2 group bg-[#121212]  p-4 h-full transition-all flex flex-col justify-evenly gap-y-2 border-white text-primary group-hover:shadow-[4px_4px_0_0_#4fbd00] group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="font-semibold ~text-sm/lg">{item.service}</div>
              <ul className="flex-1">
                {item.detail.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="text-white/90 text-xxs md:text-sm px-4 py-1 flex items-center justify-start space-x-4 font-light">
                    <FaCircleDot size={10} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
