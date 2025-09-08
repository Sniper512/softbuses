const SoftBuses = ({
  fontSize = "text-lg md:text-xl",
}) => {
  return (
    <>
      <span className={`font-consolas ${fontSize}`}>
        <span className="text-primary font-bold" style={{ textShadow: '0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.4), 0 0 20px rgba(105, 255, 0, 0.2)' }}>Soft</span>
        <span style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)' }}>Buses</span>
      </span>
    </>
  )
}

export default SoftBuses