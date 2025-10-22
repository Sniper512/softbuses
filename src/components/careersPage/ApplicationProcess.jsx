import {
	containerVariants,
	fadeInUpVariants,
} from "../../utils/onScrollAnimtions";
import { SectionHeading } from "../landingPage/SectionHeading";
import Bar from "../general/Bar";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ApplicationProcess = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const steps = [
		{
			number: "01",
			title: "Apply Online",
			description:
				"Submit your application through our job portal with your resume and cover letter.",
			icon: "/application-process-images/apply online.svg",
		},
		{
			number: "02",
			title: "Initial Screening",
			description:
				"Our recruitment team reviews your application and reaches out to qualified candidates.",
			icon: "/application-process-images/initial screening.svg",
		},
		{
			number: "03",
			title: "Technical Assessment",
			description:
				"Complete a skills assessment or technical challenge relevant to your role.",
			icon: "/application-process-images/technical assesment.svg",
		},
		{
			number: "04",
			title: "Team Interview",
			description:
				"Meet with team members and managers to discuss your experience and fit.",
			icon: "/application-process-images/team interview.svg",
		},
		{
			number: "05",
			title: "Final Round",
			description:
				"Have a conversation with leadership about your vision and our company culture.",
			icon: "/application-process-images/final round.svg",
		},
		{
			number: "06",
			title: "Offer",
			description:
				"Receive your offer and join our team to start making an impact!",
			icon: "/application-process-images/job offer.svg",
		},
	];

	return (
		<>
			<section id="application-process" className="py-20 relative z-[1]">
				<motion.div
					ref={ref}
					className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					<SectionHeading firstTitle="Application" secondTitle="Process" />

					<motion.div
						className="relative w-full px-4"
						variants={fadeInUpVariants}
					>
						{/* Timeline line for desktop */}
						{/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30 transform -translate-y-1/2"></div> */}

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
							{steps.map((step, index) => (
								<motion.div
									key={index}
									className="relative bg-black border-2 border-white/60 p-6 hover:border-primary  transition-all duration-300"
									variants={fadeInUpVariants}
								>
									{/* Step Number */}
									<div className="absolute -top-6 left-6 bg-black px-4 py-2 border-2 border-white/60">
										<span className="text-2xl  text-white">{step.number}</span>
									</div>

									{/* Icon */}
									<div className="mb-4 mt-4 flex items-center justify-center">
										<img
											src={step.icon}
											alt={step.title}
											className="w-12 h-12 object-contain"
										/>
									</div>

									{/* Title */}
									<h3 className="text-xl font-bold text-white mb-3 text-center">
										{step.title}
									</h3>

									{/* Description */}
									<p className="text-white/80 text-sm">{step.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Additional Info */}
					<motion.div
						className="max-w-3xl text-center px-4"
						variants={fadeInUpVariants}
					>
						<p className="text-white/80 text-base mb-4">
							Our hiring process typically takes 2-4 weeks from application to
							offer. We're committed to providing a fair, transparent, and
							respectful experience for all candidates.
						</p>
						<p className="text-primary text-sm">
							Questions about the process? Email us at{" "}
							<a
								href="mailto:careers@softbuses.com"
								className="underline hover:text-primary-medium"
							>
								careers@softbuses.com
							</a>
						</p>
					</motion.div>
				</motion.div>
			</section>
			<Bar />
		</>
	);
};

export default ApplicationProcess;
