import { HashLink } from "react-router-hash-link";

export default function NavDropdown({ subLinks }) {
  return (
    <>
      <div className={`w-max absolute top-8 left-1/2 -translate-x-1/2 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300`}>
        <div className="overflow-hidden">
          <ul className="rounded-xl border-[.5px] border-primary/30 bg-primary-dark/90 px-2 py-2 space-y-2">
            {subLinks.map((subLink, index) => (
              <li key={index}>
                <HashLink to={subLink.href}
                  className="text-white tracking-widest hover:text-primary-medium cursor-pointer transition-colors duration-200 py-0.5 px-1.5 lg:py-1 lg:px-2"
                >{subLink.name}</HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
