import {
	containerVariants,
	fadeInUpVariants,
} from "../../../utils/onScrollAnimtions";
import Button from "../../general/Button";
import SoftBuses from "../../general/SoftBuses";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export const Hero = () => {
	return (
		<>
			<section className="pb-8 pt-32 md:pt-28 md:pb-12 relative z-[1]">
				<motion.div
					className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center px-4 text-center gap-y-6 md:gap-y-10"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					{/* Main Text */}
					<motion.div variants={fadeInUpVariants}>
						<h1 className="~sm/xl:~text-3xl/7xl font-bold">
							Join Our Team at <br />
							<span
								className="text-primary"
								style={{
									textShadow:
										"0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)",
								}}
							>
								<SoftBuses />
							</span>
						</h1>
					</motion.div>

					{/* Sub Text */}
					<motion.div
						className="w-full flex items-center justify-center"
						variants={fadeInUpVariants}
					>
						<h2 className="text-sm md:text-base text-wrap md:w-3/4 xl:w-1/2 text-center text-white/80 tracking-widest">
							Shape the future of AI-driven innovation. Work with cutting-edge
							technology, collaborate with brilliant minds, and create solutions
							that empower businesses worldwide.
						</h2>
					</motion.div>

					{/* Call to Action */}
					<motion.div
						className="flex flex-col md:flex-row gap-x-20 w-4/5 sm:w-2/3 md:w-auto gap-y-6"
						variants={fadeInUpVariants}
					>
						<Button
							text="View Open Positions"
							bg="green"
							type="hashlink"
							href="#job-openings"
						/>
						<Button text="Why Join Us?" type="hashlink" href="#why-join" />
					</motion.div>

					{/* Stats */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8"
						variants={fadeInUpVariants}
					>
						{/* <div className="flex flex-col items-center">
							<div className="text-4xl md:text-5xl font-bold text-primary">
								10+
							</div>
							<div className="text-sm md:text-base text-white/70 mt-2">
								Team Members
							</div>
						</div> */}

						{/* <div className="flex flex-col items-center">
							<div className="text-4xl md:text-5xl font-bold text-primary">
								100%
							</div>
							<div className="text-sm md:text-base text-white/70 mt-2">
								Remote Work
							</div>
						</div> */}
					</motion.div>
				</motion.div>
			</section>
		</>
	);
};
