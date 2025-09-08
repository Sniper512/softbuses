import { containerVariants, fadeInUpVariants } from "../../../utils/onScrollAnimtions";
import Bar from "../../general/Bar";
import Button from "../../general/Button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Hero = () => {

  return (
    <>
      <section className="mx-auto max-w-[1660px] pb-8 pt-28 relative z-[1] ~px-6/40 md:~md/lg:~pt-40/60 md:~md/lg:~pb-12/16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-y-6 md:gap-y-10 md:text-left md:items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Main Text */}
            <motion.div
              variants={fadeInUpVariants}
            >
              <h1 className="~sm/xl:~text-2xl/6xl font-bold">
                Websites That Drive <br />
                <span className="text-primary" style={{ textShadow: '0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)' }}>Growth</span>,
                Not Just <span className="text-primary" style={{ textShadow: '0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)' }}>Traffic</span>
              </h1>
            </motion.div>
            {/* Sub Text */}
            <motion.div
              className="w-full flex"
              variants={fadeInUpVariants}
            >
              <h2 className="text-sm text-justify text-white/80 tracking-widest md:text-base md:text-left lg:w-3/4">
                We craft high-performing, user-friendly, and scalable websites designed to attract customers, boost conversions, and fuel business growth. Whether you're a startup, brand, or enterprise  we tailor solutions that fit your goals.
              </h2>
            </motion.div>
            {/* Call to Action */}
          </motion.div>
          <img src="/webDevelopmentPage/heroImage.svg" alt="Hero Background"
            className="w-3/4 h-auto sm:w-1/2 md:w-1/3"
          />
        </div>
        <motion.div
          className="flex justify-center mt-4"
          variants={fadeInUpVariants}
        >
          <Button text="Build My Website Today" type="link" href="/#co-create" bg="green" />
        </motion.div>
      </section>
      <Bar />
    </>
  );
};
