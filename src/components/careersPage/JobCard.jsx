// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const JobCard = ({ job, onClick }) => {
	return (
		<motion.div
			className="border border-primary/30 p-6 bg-black/50 hover:border-primary hover:shadow-glow-2 transition-all duration-300 cursor-pointer group"
			onClick={onClick}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
		>
			<div className="flex justify-between items-start mb-4">
				<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
					{job.title}
				</h3>
				<span className="text-xs px-3 py-1 bg-primary/20 text-primary border border-primary/50">
					{job.type}
				</span>
			</div>

			<div className="space-y-2 mb-4">
				<div className="flex items-center text-sm text-white/70">
					<span className="mr-2">🏢</span>
					<span>{job.department}</span>
				</div>
				<div className="flex items-center text-sm text-white/70">
					<span className="mr-2">📍</span>
					<span>{job.location}</span>
				</div>
				<div className="flex items-center text-sm text-white/70">
					<span className="mr-2">⏱️</span>
					<span>{job.experience}</span>
				</div>
			</div>

			<p className="text-white/80 text-sm mb-4 line-clamp-3">
				{job.description}
			</p>

			<div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
				<span className="text-sm font-semibold">View Details</span>
				<span className="ml-2">→</span>
			</div>
		</motion.div>
	);
};

export default JobCard;
