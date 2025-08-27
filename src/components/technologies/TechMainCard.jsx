
const TechMainCard = ({ title, icon, bg, href }) => {
  return (
    <a href={href} target="_blank" className="min-w-48 w-48 sm:min-w-[21rem] sm:w-[21rem] col-span-2 row-span-2 bg-dark border-2 ~rounded-xl/2xl flex flex-col items-center justify-between ~p-3/6 brightness-75 transition-transform group hover:border-primary hover:brightness-100">
      <div className="relative h-full rounded-t-xl overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-gradient-to-t after:from-dark after:to-dark/0">
        <img src={bg} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center gap-3">
        <img src={icon} alt={title} className="~w-5/8 ~h-5/8 group-hover:text-primary" />
        <h2 className="~text-sm/lg font-semibold">{title}</h2>
      </div>
    </a>
  );
}

export default TechMainCard