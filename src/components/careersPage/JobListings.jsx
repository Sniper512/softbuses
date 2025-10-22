import { useState, useRef, useEffect } from "react";
import {
	containerVariants,
	fadeInUpVariants,
} from "../../utils/onScrollAnimtions";
import { SectionHeading } from "../landingPage/SectionHeading";
import Bar from "../general/Bar";
import JobCard from "./JobCard";
import JobDetail from "./JobDetail";
import { fetchJobOpenings } from "../../api/jobOpenings";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";

const JobListings = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [selectedJob, setSelectedJob] = useState(null);
	const [filterDepartment, setFilterDepartment] = useState("All");
	const [jobOpenings, setJobOpenings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch job openings from API
	useEffect(() => {
		const loadJobOpenings = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const response = await fetchJobOpenings();
				setJobOpenings(response.data || []);
			} catch (err) {
				console.error("Error loading job openings:", err);
				setError(err.message || "Failed to load job openings");
			} finally {
				setIsLoading(false);
			}
		};

		loadJobOpenings();
	}, []);

	const departments = [
		"All",
		...new Set(jobOpenings.map((job) => job.department)),
	];

	const filteredJobs =
		filterDepartment === "All"
			? jobOpenings
			: jobOpenings.filter((job) => job.department === filterDepartment);

	return (
		<>
			<section id="job-openings" className="py-20 relative z-[1]">
				<motion.div
					ref={ref}
					className="w-full mx-auto max-w-[1660px] flex flex-col items-center justify-center ~/xl:~px-6/40 gap-y-12"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					<SectionHeading firstTitle="Open" secondTitle="Positions" />

					{/* Loading State */}
					{isLoading && (
						<motion.div
							className="text-center text-white py-12"
							variants={fadeInUpVariants}
						>
							<div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
							<p className="mt-4 text-lg">Loading job openings...</p>
						</motion.div>
					)}

					{/* Error State */}
					{error && !isLoading && (
						<motion.div
							className="text-center text-red-400 py-12 px-4"
							variants={fadeInUpVariants}
						>
							<p className="text-lg mb-2">⚠️ {error}</p>
							<p className="text-sm text-white/70">
								Please try refreshing the page or contact support if the issue
								persists.
							</p>
						</motion.div>
					)}

					{/* Job Listings */}
					{!isLoading && !error && (
						<>
							{/* Department Filter */}
							<motion.div
								className="flex flex-wrap gap-4 justify-center px-4"
								variants={fadeInUpVariants}
							>
								{departments.map((dept) => (
									<button
										key={dept}
										onClick={() => setFilterDepartment(dept)}
										className={`px-6 py-2 border-2 transition-all duration-300 ${
											filterDepartment === dept
												? "bg-primary text-black border-primary"
												: "bg-transparent text-white border-white hover:border-primary hover:text-primary"
										}`}
									>
										{dept}
									</button>
								))}
							</motion.div>

							{/* Job Cards */}
							<motion.div
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4"
								variants={fadeInUpVariants}
							>
								{filteredJobs.map((job) => (
									<JobCard
										key={job.id}
										job={job}
										onClick={() => setSelectedJob(job)}
									/>
								))}
							</motion.div>

							{filteredJobs.length === 0 && (
								<motion.div
									className="text-center text-white/70 py-12"
									variants={fadeInUpVariants}
								>
									<p className="text-lg">
										No positions available at the moment.
									</p>
									<p className="text-sm mt-2">
										Check back soon!
									</p>
								</motion.div>
							)}
						</>
					)}
				</motion.div>
			</section>

			{/* Job Detail Modal */}
			{selectedJob && (
				<JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
			)}

			<Bar />
		</>
	);
};

export default JobListings;
