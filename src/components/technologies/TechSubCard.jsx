
const TechSubCard = ({ title, icon, href }) => {
  return (
    <a href={href} target="_blank" className="min-w-[4.5rem] w-[4.5rem] sm:min-w-32 sm:w-32 bg-dark border ~rounded-xl/2xl shadow-md flex flex-col items-center justify-center px-3 py-4 transition-transform hover:border-primary hover:text-primary hover:shadow-lg">
      <img src={icon} alt={title} className="~w-4/6 ~h-4/6 mb-4" />
      <h2 className="~text-xxs/xs">{title}</h2>
    </a>
  );
}

export default TechSubCard