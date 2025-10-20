import {
	containerVariants,
	fadeInUpVariants,
} from "../../utils/onScrollAnimtions";
import { SectionHeading } from "../landingPage/SectionHeading";
import Bar from "../general/Bar";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Benefits = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const benefits = [
		{
			category: "💰 Compensation & Benefits",
			items: [
				"Competitive salary packages",
				"Performance-based bonuses",
				"Stock options for senior roles",
				"Annual salary reviews",
			],
		},
		{
			category: "🏥 Health & Wellness",
			items: [
				"Comprehensive health insurance",
				"Dental and vision coverage",
				"Mental health support",
				"Wellness programs and gym memberships",
			],
		},
		{
			category: "🕐 Time Off",
			items: [
				"Unlimited paid time off",
				"Paid parental leave",
				"Paid holidays",
				"Sabbatical opportunities",
			],
		},
		{
			category: "📚 Learning & Development",
			items: [
				"Training and certification programs",
				"Conference and workshop attendance",
				"Online learning platforms access",
				"Mentorship programs",
			],
		},
		{
			category: "💻 Work Setup",
			items: [
				"Latest MacBook or PC of your choice",
				"Home office setup allowance",
				"High-speed internet reimbursement",
				"Premium software and tools",
			],
		},
		{
			category: "🎉 Perks & Culture",
			items: [
				"Remote-first culture",
				"Flexible working hours",
				"Team building events",
				"Annual company retreats",
			],
		},
	];

	return (
		<>
			<section id="benefits" className="py-20 relative z-[1]">
				<motion.div
					ref={ref}
					className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					<SectionHeading firstTitle="Benefits &" secondTitle="Perks" />

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
						variants={fadeInUpVariants}
					>
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								className="border-2 border-primary/50 p-6 bg-gradient-to-br from-black/80 to-primary-dark/10 hover:shadow-glow transition-all duration-300"
								variants={fadeInUpVariants}
							>
								<h3 className="text-lg md:text-xl font-bold text-primary mb-4">
									{benefit.category}
								</h3>
								<ul className="space-y-2">
									{benefit.items.map((item, idx) => (
										<li
											key={idx}
											className="flex items-start text-white/80 text-sm md:text-base"
										>
											<span className="text-primary mr-2">✓</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</section>
			<Bar />
		</>
	);
};

export default Benefits;
