import arrowUp from "../assets/arrow-up.svg"

function ScrollUpButton() {
  return(
    <a href="#inicio">
      <div className="fixed flex items-center justify-center w-10 h-10 border 
      bg-base-100 border-primary-100 rounded-md bottom-8 right-8 md:right-20 z-30">
        <img src={arrowUp} />
      </div>
    </a>
  )
}
export default ScrollUpButton;