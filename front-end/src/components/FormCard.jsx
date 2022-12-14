import { useState } from "react";
import check from "../assets/check.svg";

function FormCard(props) {
  
  return(
    <button 
      type="button" 
      {...props}
      className={`flex flex-1 justify-between h-[150px] gap-[10px] flex-col p-3 sm:flex-none sm:w-max sm:min-w-[180px] sm:p-5 rounded-[10px] drop-shadow-tertiary ${
      props.selected ? "bg-[#FFFDF8] border-2 border-salmon-200/[0.5] text-salmon-200" : "bg-base-100 border border-violet-200"
    }`}>
      <div className="flex flex-col items-start">
        <span className="font-main-bold">{props.title}</span>
        <p className="font-main-italic">{props.subtitle}</p>
        <p className={`${!props.selected && "text-base-300"}`}>
          {props.date}
        </p>
      </div>
      <div className="flex w-full items-end">
        <p className={`font-main-semibold text-[0.75em] h-[25px] flex-1 text-start ${props.selected ? "text-base-300" : "text-base-300/[0.5]"}`}>
          {props.price}
        </p>
        {props.selected && 
          <img src={check}/>
        }
      </div>
    </button>
  )
}

export default FormCard;