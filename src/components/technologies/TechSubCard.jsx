
const TechSubCard = ({ title, icon, href }) => {
  return (
    <a href={href} target="_blank" className="min-w-[5.5rem] w-[5.5rem] sm:min-w-40 sm:w-40 bg-dark border ~rounded-xl/2xl shadow-md flex flex-col items-center justify-center ~px-2/3 ~py-2/4 brightness-[.4] transition-transform hover:border-primary hover:brightness-100">
      <img src={icon} alt={title} className="~w-4/6 ~h-4/6 ~mb-1/4" />
      <h2 className="~text-xxxs/xs text-center">{title}</h2>
    </a>
  );
}

export default TechSubCard