import { useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import Button from "../general/Button";
import { SectionHeading } from "../landingPage/SectionHeading";
import Bar from "../general/Bar";
import {
	containerVariants,
	fadeInUpVariants,
} from "../../utils/onScrollAnimtions";

const CareerQuestions = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [turnstileToken, setTurnstileToken] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate turnstile
		if (!turnstileToken) {
			setSubmitStatus({
				type: "error",
				message: "Please complete the security verification.",
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/career-questions`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						...formData,
						turnstileToken,
					}),
				}
			);

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Failed to submit question");
			}

			setSubmitStatus({
				type: "success",
				message: "Your question has been submitted successfully!",
			});

			// Reset form
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			setTurnstileToken("");
		} catch (error) {
			setSubmitStatus({
				type: "error",
				message: error.message || "Failed to submit. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<section className="py-20 relative z-[1]">
				<motion.div
					ref={ref}
					className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					<SectionHeading
						firstTitle="Ask Us Anything"
						secondTitle="About Careers & Jobs"
					/>

					<motion.div
						className="w-full max-w-3xl px-4"
						variants={fadeInUpVariants}
					>
						<div className="border border-primary/30 p-8 bg-black/50">
							<p className="text-white/80 text-center mb-8">
								Have questions about working at SoftBuses? We're here to help!
								Ask us anything about our culture, positions, interview process,
								or career opportunities.
							</p>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-white mb-2">Name *</label>
										<input
											type="text"
											name="name"
											required
											value={formData.name}
											onChange={handleChange}
											disabled={isSubmitting}
											className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none disabled:opacity-50"
											placeholder="Your name"
										/>
									</div>

									<div>
										<label className="block text-white mb-2">Email *</label>
										<input
											type="email"
											name="email"
											required
											value={formData.email}
											onChange={handleChange}
											disabled={isSubmitting}
											className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none disabled:opacity-50"
											placeholder="your.email@example.com"
										/>
									</div>
								</div>

								<div>
									<label className="block text-white mb-2">Subject *</label>
									<input
										type="text"
										name="subject"
										required
										value={formData.subject}
										onChange={handleChange}
										disabled={isSubmitting}
										className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none disabled:opacity-50"
										placeholder="What's your question about?"
									/>
								</div>

								<div>
									<label className="block text-white mb-2">
										Your Question *
									</label>
									<textarea
										name="message"
										required
										rows="6"
										value={formData.message}
										onChange={handleChange}
										disabled={isSubmitting}
										placeholder="Ask us anything about careers and jobs at SoftBuses..."
										className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none resize-none disabled:opacity-50"
									></textarea>
								</div>

								{/* Turnstile Widget */}
								<div className="flex justify-center">
									<Turnstile
										siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
										onSuccess={setTurnstileToken}
										options={{
											theme: "dark",
										}}
									/>
								</div>

								{/* Status Message */}
								{submitStatus && (
									<div
										className={`p-4 rounded border ${
											submitStatus.type === "success"
												? "bg-green-900/20 border-green-500 text-green-500"
												: "bg-red-900/20 border-red-500 text-red-500"
										}`}
									>
										{submitStatus.message}
									</div>
								)}

								<button
									type="submit"
									disabled={isSubmitting || !turnstileToken}
									className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
								>
									<Button
										text={isSubmitting ? "Submitting..." : "Submit Question"}
									/>
								</button>
							</form>
						</div>
					</motion.div>
				</motion.div>
			</section>
			<Bar />
		</>
	);
};

export default CareerQuestions;
