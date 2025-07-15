const Button = ({ text = "", type = "link", onClick, href, bg = "transparent" }) => {
  return (
    <>
      <div className="relative group pt-1 pl-1">
        {
          type === "link" ? (
            <a href={href} className={`relative ~sm/xl:~px-5/16 py-3 w-full border-2 text-lg font-medium transition-all duration-300 cursor-pointer group-hover:-translate-x-1 group-hover:-translate-y-1 block text-center ${bg === "transparent" ? "border-white text-primary group-hover:shadow-[4px_4px_0_0_#69FF00]" : "border-black bg-primary text-black group-hover:shadow-[4px_4px_0_0_#fff]"}`}>
              {text}
            </a>
          ) : type === "button" ? (
            <button onClick={onClick} className={`relative ~sm/xl:~px-5/16 py-3 w-full border-2 text-lg font-medium transition-all duration-300 cursor-pointer group-hover:-translate-x-1 group-hover:-translate-y-1 ${bg === "transparent" ? "border-white text-primary group-hover:shadow-[4px_4px_0_0_#69FF00]" : "border-black bg-primary text-black group-hover:shadow-[4px_4px_0_0_#fff]"
              }`}>
              {text}
            </button>
          ) : null
        }
      </div >
    </>
  )
}

export default Button