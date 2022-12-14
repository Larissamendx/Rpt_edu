import className from "classnames";
import { useState } from "react";
import { useEffect } from "react";
import checkIcon from "../assets/check-circle.svg";
import warningIcon from "../assets/warning-circle.svg";
import x from "../assets/x.svg";

function DialogBox(props) {
  const [timeOutId, setTimeoutId] = useState();

  useEffect(() => {
    props.isOpen && setTimeoutId(handleTimeout)
  },[props.isOpen])

  const handleTimeout = () => {
    return setTimeout(() => {
      props.onRequestClose()
    }, 
    props.closeTimeoutMS ? props.closeTimeoutMS : "3000")
  }

  const handleClose = () => {
    clearTimeout(timeOutId);
    props.onRequestClose();
  }

  return(
    <div className={
      className(
        'fixed flex w-auto self-center bg-base-100 text-primary-200 z-50 drop-shadow-register mx-4 \
        justify-between items-center mt-4 pl-8 pr-4 py-4 gap-4 rounded-xl overflow-hidden border border-violet-100 transition-opacity \
        before:w-4 before:h-full before:left-0  before:absolute', {
          "before:bg-green": !props.type || (props.type === "confirmation"),
          "before:bg-orange": props.type === "warning",
          "opacity-0 hidden": !props.isOpen,
        })}>
      
      <img src={props.type === "confirmation" ? checkIcon : warningIcon} className="h-16"/>
      <div className="flex flex-1 flex-col gap-2 max-w-lg">
        <strong>{props.title}</strong>
        <p className="text-[0.75em] text-base-300">{props.description}</p> 
      </div>
      <button onClick={handleClose} className="self-start">
        <img src={x} className="w-5"/>
      </button>
    </div>
  )
}
export default DialogBox;