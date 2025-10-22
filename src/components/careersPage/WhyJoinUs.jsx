import {
	containerVariants,
	fadeInUpVariants,
} from "../../utils/onScrollAnimtions";
import { SectionHeading } from "../landingPage/SectionHeading";
import Bar from "../general/Bar";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const WhyJoinUs = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const reasons = [
		{
			icon: "/career-page-images/Cutting Edge Technology.svg",
			title: "Cutting-Edge Technology",
			description:
				"Work with the latest AI, machine learning, and automation technologies. Stay ahead of the curve and continuously learn.",
		},
		{
			icon: "/career-page-images/Global Impact.svg",
			title: "Global Impact",
			description:
				"Your work will empower businesses worldwide, helping them transform and succeed in the digital age.",
		},
		{
			icon: "/career-page-images/Innovative Culture.svg",
			title: "Innovation Culture",
			description:
				"We encourage creativity and new ideas. Your voice matters, and your innovations can shape our products.",
		},
		{
			icon: "/career-page-images/Collaborative environment.svg",
			title: "Collaborative Environment",
			description:
				"Work with talented professionals from diverse backgrounds. Learn, grow, and succeed together.",
		},
		{
			icon: "/career-page-images/Career Growth.svg",
			title: "Career Growth",
			description:
				"Clear career paths, mentorship programs, and opportunities to take on new challenges and responsibilities.",
		},
		{
			icon: "/career-page-images/Work Life Balance.svg",
			title: "Work-Life Balance",
			description:
				"Flexible hours, remote work options, and unlimited PTO to ensure you maintain a healthy work-life balance.",
		},
	];

	return (
		<>
			<section id="why-join" className="py-20 relative z-[1]">
				<motion.div
					ref={ref}
					className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					<SectionHeading firstTitle="Why Join" secondTitle="SoftBuses?" />

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
						variants={fadeInUpVariants}
					>
						{reasons.map((reason, index) => (
							<motion.div
								key={index}
								className="border border-white/60 p-6 hover:border-primary  transition-all duration-300 bg-black/50"
								variants={fadeInUpVariants}
							>
								<div className="mb-4">
									<img
										src={reason.icon}
										alt={reason.title}
										className="w-12 h-12 mx-auto object-contain"
									/>
								</div>
								<h3 className="text-xl font-bold text-white mb-3 text-center">
									{reason.title}
								</h3>
								<p className="text-white/80 text-sm md:text-sm text-center">
									{reason.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</section>
			<Bar />
		</>
	);
};

export default WhyJoinUs;
