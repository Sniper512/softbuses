import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { Turnstile } from "@marsidev/react-turnstile";
import Button from "../general/Button";
import { submitCareerApplication } from "../../api/careerApplication";

const JobDetail = ({ job, onClose }) => {
	// Hide body scrollbar and navbar when modal is open
	useEffect(() => {
		// Add class to body to hide scrollbar
		document.body.style.overflow = "hidden";

		// Hide navbar
		const navbar = document.querySelector("nav");
		if (navbar) {
			navbar.style.display = "none";
		}

		// Cleanup: restore scrollbar and navbar when modal closes
		return () => {
			document.body.style.overflow = "unset";
			if (navbar) {
				navbar.style.display = "";
			}
		};
	}, []);
	const [showApplicationForm, setShowApplicationForm] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [fileError, setFileError] = useState("");
	const [turnstileToken, setTurnstileToken] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		linkedin: "",
		portfolio: "",
		resume: null,
		coverLetter: "",
	});

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
			// Create FormData for file upload
			const formDataToSend = new FormData();
			formDataToSend.append("name", formData.name);
			formDataToSend.append("email", formData.email);
			formDataToSend.append("phone", formData.phone);
			formDataToSend.append("linkedin", formData.linkedin);
			formDataToSend.append("portfolio", formData.portfolio);
			formDataToSend.append("coverLetter", formData.coverLetter);
			formDataToSend.append("jobTitle", job.title);
			formDataToSend.append("jobId", job._id);
			formDataToSend.append("jobDepartment", job.department);
			formDataToSend.append("turnstileToken", turnstileToken);

			// Append resume file
			if (formData.resume) {
				formDataToSend.append("resume", formData.resume);
			}

			const response = await submitCareerApplication(formDataToSend);

			setSubmitStatus({
				type: "success",
				message: response.message || "Application submitted successfully!",
			});

			// Reset form after successful submission
			setTimeout(() => {
				onClose();
			}, 2000);
		} catch (error) {
			setSubmitStatus({
				type: "error",
				message:
					error.message || "Failed to submit application. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		// Validate file size for resume uploads
		if (files && files[0]) {
			const file = files[0];
			const maxSize = 5 * 1024 * 1024; // 5MB in bytes

			if (file.size > maxSize) {
				const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
				setFileError(
					`File size (${fileSizeMB}MB) exceeds the maximum limit of 5MB. Please choose a smaller file.`
				);
				// Clear the file input
				e.target.value = "";
				return;
			} else {
				// Clear file error if file is valid
				setFileError("");
			}
		}

		setFormData((prev) => ({
			...prev,
			[name]: files ? files[0] : value,
		}));
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
				onClick={onClose}
			>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					className="bg-dark border-2 border-primary max-w-4xl w-full my-8 relative"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-white/70 hover:text-primary text-3xl z-10"
					>
						×
					</button>

					<div className="p-8 max-h-[85vh] overflow-y-auto">
						{!showApplicationForm ? (
							<>
								{/* Job Header */}
								<div className="mb-8">
									<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
										{job.title}
									</h2>
									<div className="flex flex-wrap gap-4 text-sm text-white/70">
										<span className="flex items-center">
											<span className="mr-2">🏢</span>
											{job.department}
										</span>
										<span className="flex items-center">
											<span className="mr-2">📍</span>
											{job.location}
										</span>
										<span className="flex items-center">
											<span className="mr-2">⏱️</span>
											{job.experience}
										</span>
										<span className="px-3 py-1 bg-primary/20 text-primary border border-primary/50">
											{job.type}
										</span>
									</div>
								</div>

								{/* Job Description */}
								<div className="mb-8">
									<h3 className="text-xl font-bold text-white mb-3">
										About the Role
									</h3>
									<p className="text-white/80">{job.description}</p>
								</div>

								{/* Responsibilities */}
								<div className="mb-8">
									<h3 className="text-xl font-bold text-white mb-3">
										Responsibilities
									</h3>
									<ul className="space-y-2">
										{job.responsibilities.map((item, index) => (
											<li
												key={index}
												className="flex items-start text-white/80"
											>
												<span className="text-primary mr-2">•</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Requirements */}
								<div className="mb-8">
									<h3 className="text-xl font-bold text-white mb-3">
										Requirements
									</h3>
									<ul className="space-y-2">
										{job.requirements.map((item, index) => (
											<li
												key={index}
												className="flex items-start text-white/80"
											>
												<span className="text-primary mr-2">✓</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Required Skills */}
								{job.skills && job.skills.length > 0 && (
									<div className="mb-8">
										<h3 className="text-xl font-bold text-white mb-3">
											Required Skills
										</h3>
										<div className="flex flex-wrap gap-2">
											{job.skills.map((skill, index) => (
												<span
													key={index}
													className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm hover:bg-primary/20 transition-colors"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								)}

								{/* Nice to Have */}
								{job.niceToHave && job.niceToHave.length > 0 && (
									<div className="mb-8">
										<h3 className="text-xl font-bold text-white mb-3">
											Nice to Have
										</h3>
										<ul className="space-y-2">
											{job.niceToHave.map((item, index) => (
												<li
													key={index}
													className="flex items-start text-white/80"
												>
													<span className="text-primary mr-2">+</span>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								)}

								{/* Apply Button */}
								<div className="mt-8">
									<button
										onClick={() => setShowApplicationForm(true)}
										className="w-full md:w-auto"
									>
										<Button text="Apply for this Position" bg="green" />
									</button>
								</div>
							</>
						) : (
							<>
								{/* Application Form */}
								<h2 className="text-3xl font-bold text-primary mb-6">
									Apply for {job.title}
								</h2>

								{/* Status Message */}
								{submitStatus && (
									<div
										className={`mb-6 p-4 border ${
											submitStatus.type === "success"
												? "bg-green-900/20 border-green-500 text-green-400"
												: "bg-red-900/20 border-red-500 text-red-400"
										}`}
									>
										{submitStatus.message}
									</div>
								)}

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label className="block text-white mb-2">
												Full Name *
											</label>
											<input
												type="text"
												name="name"
												required
												value={formData.name}
												onChange={handleChange}
												disabled={isSubmitting}
												className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none disabled:opacity-50"
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
											/>
										</div>
										<div>
											<label className="block text-white mb-2">Phone *</label>
											<input
												type="tel"
												name="phone"
												required
												value={formData.phone}
												onChange={handleChange}
												disabled={isSubmitting}
												className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none disabled:opacity-50"
											/>
										</div>
										<div>
											<label className="block text-white mb-2">
												LinkedIn Profile
											</label>
											<input
												type="url"
												name="linkedin"
												value={formData.linkedin}
												onChange={handleChange}
												disabled={isSubmitting}
												className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none disabled:opacity-50"
											/>
										</div>
									</div>

									<div>
										<label className="block text-white mb-2">
											Portfolio/Website
										</label>
										<input
											type="url"
											name="portfolio"
											value={formData.portfolio}
											onChange={handleChange}
											disabled={isSubmitting}
											className="w-full bg-black border border-primary/50 p-3 text-white focus:border-primary focus:outline-none disabled:opacity-50"
										/>
									</div>

									<div>
										<label className="block text-white mb-2">Resume/CV *</label>
										<input
											type="file"
											name="resume"
											required
											accept=".pdf,.doc,.docx"
											onChange={handleChange}
											disabled={isSubmitting}
											className={`w-full bg-black border p-3 text-white focus:outline-none file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-primary file:text-black file:cursor-pointer disabled:opacity-50 ${
												fileError
													? "border-red-500 focus:border-red-500"
													: "border-primary/50 focus:border-primary"
											}`}
										/>
										{fileError && (
											<p className="text-red-400 text-sm mt-2 font-semibold">
												⚠️ {fileError}
											</p>
										)}
										{!fileError && (
											<p className="text-white/50 text-sm mt-2">
												Accepted formats: PDF, DOC, DOCX (Max 5MB)
											</p>
										)}
									</div>

									<div>
										<label className="block text-white mb-2">
											Cover Letter *
										</label>
										<textarea
											name="coverLetter"
											required
											rows="6"
											value={formData.coverLetter}
											onChange={handleChange}
											disabled={isSubmitting}
											placeholder="Tell us why you're a great fit for this role..."
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

									<div className="flex gap-4">
										<button
											type="submit"
											disabled={isSubmitting || !turnstileToken}
											className="flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
										>
											<Button
												text={
													isSubmitting ? "Submitting..." : "Submit Application"
												}
												bg="green"
												type="button"
											/>
										</button>
										<button
											type="button"
											onClick={() => setShowApplicationForm(false)}
											disabled={isSubmitting}
											className="flex-1 disabled:opacity-50"
										>
											<Button text="Back to Job Details" type="button" />
										</button>
									</div>
								</form>
							</>
						)}
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default JobDetail;
