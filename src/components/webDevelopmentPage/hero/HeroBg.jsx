export default function HeroBg() {
  return (
    <div className="absolute w-full h-full overflow-x-hidden">
      <img src="/webDevelopmentPage/heroBg.png" alt="hero background"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute z-0 top-0 left-0 -translate-x-1/2 w-full h-full md:w-1/2">
        <img src="/webDevelopmentPage/heroBgCircle.png" alt="hero background"
          className="w-full h-full object-contain object-left"
        />
      </div>
      <div className="absolute z-0 bottom-0 right-0 translate-x-1/2 w-full h-full md:top-0 md:bottom-auto md:w-1/2">
        <img src="/webDevelopmentPage/heroBgCircle.png" alt="hero background"
          className="w-full h-full object-contain object-right"
        />
      </div>
    </div>
  )
}
