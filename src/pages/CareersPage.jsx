import { Hero } from "../components/careersPage/hero/Hero";
import HeroBg from "../components/careersPage/hero/HeroBg";
import WhyJoinUs from "../components/careersPage/WhyJoinUs";
import Benefits from "../components/careersPage/Benefits";
import JobListings from "../components/careersPage/JobListings";
import ApplicationProcess from "../components/careersPage/ApplicationProcess";
import CareerQuestions from "../components/careersPage/CareerQuestions";
import { ScrollToTopButton } from "../components/general/ScrollToTopButton";

export const CareersPage = () => {
	return (
		<>
			<div id="careers-hero" className="relative">
				<HeroBg />
				<Hero />
			</div>
			<WhyJoinUs />
			<JobListings />
			<ApplicationProcess />
			<CareerQuestions />
			<ScrollToTopButton />
		</>
	);
};
