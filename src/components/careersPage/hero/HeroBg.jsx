const HeroBg = () => {
	return (
		<div className="hero-img absolute inset-0 w-full h-full overflow-hidden z-0 opacity-40">
			{/* Animated circles */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-1"></div>
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-2"></div>
			<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-3"></div>
		</div>
	);
};

export default HeroBg;
