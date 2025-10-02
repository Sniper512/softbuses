import { HashLink } from "react-router-hash-link";

export const HeaderContactButton = () => {
  return (
    <div className="relative group pt-1 pl-1">
      <HashLink to="/#co-create" className="block relative px-4 py-2 border-2 border-white text-primary font-medium transition-all duration-300 cursor-pointer group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[4px_4px_0_0_#69FF00]">
        Contact Us
      </HashLink>
    </div>
  );
};
